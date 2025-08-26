/** @odoo-module **/

import { patch } from "@web/core/utils/patch";
import { usePos } from "@point_of_sale/app/store/pos_hook";

// Patch the POS store to ensure arabic_name field is loaded
patch(usePos.prototype, {
    setup() {
        this._super(...arguments);
        console.log('ICS POS Arabic Names: POS store setup patched');
        
        // Ensure arabic_name field is loaded for products
        if (this.db && this.db.product_by_id) {
            console.log('ICS POS Arabic Names: Products found in DB:', Object.keys(this.db.product_by_id).length);
            // Force reload products with arabic_name field
            this.loadProducts();
        }
    },
    
    async loadProducts() {
        console.log('ICS POS Arabic Names: loadProducts called');
        // Override the loadProducts method to include arabic_name
        const result = await this._super(...arguments);
        
        // Ensure arabic_name field is included in product data
        if (this.db && this.db.product_by_id) {
            console.log('ICS POS Arabic Names: Checking products for arabic_name...');
            Object.values(this.db.product_by_id).forEach(product => {
                console.log('ICS POS Arabic Names: Product:', product.display_name, 'arabic_name:', product.arabic_name);
                if (product.arabic_name) {
                    console.log('ICS POS Arabic Names: Product has Arabic name:', product.arabic_name);
                }
            });
        }
        
        return result;
    }
});

// Also patch the models loading to ensure arabic_name field is included
import { models } from "@point_of_sale/app/store/models";

if (models && models.load_fields) {
    const originalLoadFields = models.load_fields;
    models.load_fields = function(model, fields) {
        if (model === 'product.product' && fields.indexOf('arabic_name') === -1) {
            fields.push('arabic_name');
            console.log('ICS POS Arabic Names: Added arabic_name field to product model');
        }
        return originalLoadFields.call(this, model, fields);
    };
}

console.log('ICS POS Arabic Names: POS store and models patched successfully');
