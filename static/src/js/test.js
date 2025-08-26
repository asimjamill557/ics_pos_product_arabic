console.log('TEST: Asset loading is working!');
console.log('TEST: File loaded in POS context');
console.log('TEST: Current time:', new Date().toISOString());

// Try to detect if we're in POS context
if (typeof window !== 'undefined') {
    console.log('TEST: Window object available');
    if (window.odoo) {
        console.log('TEST: Odoo object available');
    }
}
