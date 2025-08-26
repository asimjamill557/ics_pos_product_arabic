/** @odoo-module **/

console.log('ICS POS Arabic Names: Module starting...');

// For now, just log that we're loaded
// We'll add the component extension once basic loading works
console.log('ICS POS Arabic Names: Basic module loaded successfully');

// Try to detect POS context
if (typeof window !== 'undefined') {
    console.log('ICS POS Arabic Names: Window object available');
    if (window.odoo) {
        console.log('ICS POS Arabic Names: Odoo object available');
    }
    
    // Check if we're in POS context
    if (window.location.pathname.includes('/pos')) {
        console.log('ICS POS Arabic Names: Detected POS context');
    }
}

console.log('ICS POS Arabic Names: Module ready');