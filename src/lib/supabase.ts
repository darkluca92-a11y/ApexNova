import { createClient } from '@supabase/supabase-js';

// Environment variables for Supabase configuration
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://placeholder.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'placeholder-key';

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn('Missing Supabase environment variables. Some features may not work properly.');
}

// Create Supabase client
export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: false, // We don't need user sessions for contact form
  },
});

// Types for our contact submission
export interface ContactSubmission {
  id?: string;
  name: string;
  email: string;
  company?: string;
  phone?: string;
  service: string;
  budget?: string;
  timeline?: string;
  message: string;
  created_at?: string;
  updated_at?: string;
}

// Contact form submission service
export class ContactService {
  /**
   * Submit a contact form to the database
   * @param formData - The contact form data
   * @returns Promise with submission result
   */
  static async submitContact(formData: Omit<ContactSubmission, 'id' | 'created_at' | 'updated_at'>) {
    try {
      // Validate required fields
      if (!formData.name || !formData.email || !formData.service || !formData.message) {
        throw new Error('Please fill in all required fields.');
      }

      // Validate email format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        throw new Error('Please enter a valid email address.');
      }

      // Insert contact submission into database
      const { data, error } = await supabase
        .from('contact_submissions')
        .insert([formData])
        .select()
        .single();

      if (error) {
        console.error('Supabase error:', error);
        throw new Error('Failed to submit contact form. Please try again.');
      }

      return {
        success: true,
        data,
        message: 'Thank you for your inquiry! We\'ll get back to you within 24 hours.',
      };
    } catch (error) {
      console.error('Contact submission error:', error);
      return {
        success: false,
        error: error instanceof Error ? error.message : 'An unexpected error occurred.',
      };
    }
  }

  /**
   * Get all contact submissions (for admin use)
   * @returns Promise with all submissions
   */
  static async getAllSubmissions() {
    try {
      const { data, error } = await supabase
        .from('contact_submissions')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        throw new Error('Failed to fetch contact submissions.');
      }

      return {
        success: true,
        data,
      };
    } catch (error) {
      console.error('Fetch submissions error:', error);
      return {
        success: false,
        error: error instanceof Error ? error.message : 'An unexpected error occurred.',
      };
    }
  }
}