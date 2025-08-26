# -*- coding: utf-8 -*-
{
    'name': "POS Arabic Product Name",

    'summary': """
        Show Arabic Name on POS Screen""",

    'description': """
        Show Arabic Name on POS Screen
    """,

    'author': "Icloud Solutions",
    'website': "https://www.icloud-solutions.net",
    'maintainer': "Icloud Solutions",
    'category': 'Point of Sale',
    'version': '17.0.0.1',
    'depends': ['base', 'point_of_sale'],
    'data': [
        'security/ir.model.access.csv',
        'views/views.xml',
        'views/templates.xml',
    ],
    'assets': {
        'web.assets_backend': [
            'ics_pos_product_arabic/static/src/js/test.js',
            'ics_pos_product_arabic/static/src/js/pos_models.js',
            'ics_pos_product_arabic/static/src/js/product_arabic_name.js',
        ],
        'point_of_sale.assets': [
            'ics_pos_product_arabic/static/src/js/test.js',
            'ics_pos_product_arabic/static/src/js/pos_models.js',
            'ics_pos_product_arabic/static/src/js/product_arabic_name.js',
            'ics_pos_product_arabic/static/src/css/product_arabic_name.css',
        ],
    },
    'qweb': [
        'static/src/xml/product_arabic_name.xml',
    ],
    'images': ['static/description/thumbnail.png'],
    'license': 'OPL-1',  
    'price': 0,
    'currency': 'EUR',  
    'installable': True,
    'auto_install': False,
    'application': False,
}
