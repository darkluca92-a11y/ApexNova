#!/usr/bin/env node

/**
 * Deployment Verification Script
 * Checks if the deployment is properly synced
 */

import https from 'https';

const DOMAIN = 'getapexnova.com';
const EXPECTED_COMMIT = 'ef088cb'; // Latest commit

console.log('🔍 Checking deployment status...\n');

// Function to check if domain resolves properly
function checkDomain() {
    return new Promise((resolve, reject) => {
        const options = {
            hostname: DOMAIN,
            port: 443,
            path: '/',
            method: 'HEAD',
            timeout: 10000
        };

        const req = https.request(options, (res) => {
            console.log(`✅ Domain Status: ${res.statusCode}`);
            console.log(`📋 Server: ${res.headers.server || 'Unknown'}`);
            console.log(`🔒 SSL: ${res.headers['strict-transport-security'] ? 'Enabled' : 'Check needed'}`);
            
            if (res.headers.etag) {
                console.log(`🏷️  ETag: ${res.headers.etag}`);
            }
            
            resolve(res);
        });

        req.on('error', (err) => {
            console.error(`❌ Domain check failed: ${err.message}`);
            reject(err);
        });

        req.on('timeout', () => {
            console.error('❌ Request timeout');
            req.destroy();
            reject(new Error('Timeout'));
        });

        req.end();
    });
}

// Function to check specific page
function checkPortfolioPage() {
    return new Promise((resolve, reject) => {
        const options = {
            hostname: DOMAIN,
            port: 443,
            path: '/portfolio',
            method: 'GET',
            timeout: 10000
        };

        const req = https.request(options, (res) => {
            let data = '';
            
            res.on('data', (chunk) => {
                data += chunk;
            });
            
            res.on('end', () => {
                console.log(`📄 Portfolio Page Status: ${res.statusCode}`);
                
                if (data.includes('Oops! Something went wrong')) {
                    console.log('❌ Portfolio page showing error');
                } else if (data.includes('Success Stories') || data.includes('ApexNova AI')) {
                    console.log('✅ Portfolio page loading correctly');
                } else {
                    console.log('⚠️  Portfolio page content unclear');
                }
                
                resolve(res);
            });
        });

        req.on('error', (err) => {
            console.error(`❌ Portfolio page check failed: ${err.message}`);
            reject(err);
        });

        req.end();
    });
}

// Main execution
async function main() {
    try {
        console.log('🌐 Checking main domain...');
        await checkDomain();
        
        console.log('\n📱 Checking portfolio page...');
        await checkPortfolioPage();
        
        console.log('\n🎯 Deployment Check Complete!');
        console.log('\n📋 Next Steps if issues persist:');
        console.log('1. Check Netlify dashboard for build status');
        console.log('2. Verify custom domain SSL configuration');
        console.log('3. Clear browser cache and try again');
        console.log('4. Check Netlify deploy logs for errors');
        
    } catch (error) {
        console.error('\n❌ Deployment check failed:', error.message);
        console.log('\n🔧 Troubleshooting:');
        console.log('1. Domain may not be properly configured');
        console.log('2. SSL certificate may be provisioning');
        console.log('3. DNS propagation may be in progress');
    }
}

main();