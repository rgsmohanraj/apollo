const breadcrumbConfig = {
    "dashboard": {
        "parents": [],
        "title": "Dashboard",
        "url": "/dashboard"
    },
    "partners": {
        "parents": [],
        "title": "Partners",
        "url": "/partners"
    },
    "onboarding": {
        "parents": ["partners"],
        "title": "Onboarding",
        "url": "/partners/onboarding"
    },
    "view-partner": {
        "parents": ["partners"],
        "title": "Partner Details",
        "url": "/partners/view"
    },
    "products": {
        "parents": [],
        "title": "Products",
        "url": "/products"
    },
    "view-product": {
        "parents": ["products"],
        "title": "Product Details",
        "url": "/products/view"
    },
    "create-product": {
        "parents": ["products"],
        "title": "Product Details",
        "url": "/products/create"
    },
    "end-borrowers": {
        "parents": [],
        "title": "End Borrowers",
        "url": "/end-borrowers"
    },
    "view-end-borrowers": {
        "parents": ["end-borrowers"],
        "title": "Details",
        "url": "/end-borrowers/view"
    },
    "basic-detail-end-borrowers": {
        "parents": ["end-borrowers"],
        "title": "Details",
        "url": "/end-borrowers/basicdetail"
    },
    "fees-and-charges": {
        "parents": [],
        "title": "Fees & Charges",
        "url": "/fees-and-charges"
    },
    "configure-fees-and-charges": {
        "parents": ["fees-and-charges"],
        "title": "Configuration",
        "url": "/fees-and-charges/create"
    },
    "view-fees-and-charges": {
        "parents": ["fees-and-charges"],
        "title": "Details",
        "url": "/fees-and-charges/view"
    }
};

export {breadcrumbConfig};