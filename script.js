document.addEventListener('DOMContentLoaded', function() {// here we wait for dom to load
    const themeToggle = document.getElementById('theme-toggle');
    const addProductBtn = document.getElementById('add-product');
    const productContainer = document.getElementById('product-container');
    const warrantyBtn = document.getElementById('warranty-btn');
    const warrantyFeature = document.getElementById('warranty-feature');
    const detailButtons = document.querySelectorAll('.details-btn');
    
    const products = [
        { name: "Gaming Laptop", description: "Ultra-thin design with powerful performance" },
        { name: "Wireless Earbuds", description: "Crystal clear sound with noise cancellation" },
        { name: "Smart Watch", description: "Track fitness and stay connected on the go" },
        { name: "4K Monitor", description: "Stunning visuals with HDR support" }
    ];
    
    let productIndex = 0;
    
    // Theme toggle functionality
    themeToggle.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
        
        // Change button text based on theme
        if (document.body.classList.contains('dark-mode')) {
            themeToggle.textContent = 'Switch to Light Theme';
            document.querySelector('.hero h1').textContent = 'Tech Solutions After Dark';
        } else {
            themeToggle.textContent = 'Switch to Dark Theme';
            document.querySelector('.hero h1').textContent = 'Next-Gen Tech Solutions';
        }
    });
    
    // Add new product functionality
    addProductBtn.addEventListener('click', function() {
        // Create a new product card if we haven't added all available products
        if (productIndex < products.length) {
            const newProduct = document.createElement('div');
            newProduct.className = 'product-card fadeIn';
            
            newProduct.innerHTML = `
                <h3>${products[productIndex].name}</h3>
                <p>${products[productIndex].description}</p>
                <button class="details-btn">View Details</button>
            `;
            
            productContainer.appendChild(newProduct);
            
            // Add event listener to the newly created button
            newProduct.querySelector('.details-btn').addEventListener('click', showProductDetails);
            
            productIndex++;
            
            // Disable button if we've added all products
            if (productIndex >= products.length) {
                addProductBtn.textContent = 'No More Products';
                addProductBtn.disabled = true;
            }
        }
    });
    
    // Warranty button functionality
    warrantyBtn.addEventListener('click', function() {
        // Toggle highlight class
        warrantyFeature.classList.toggle('highlight');
        
        // Change text content based on highlight state
        if (warrantyFeature.classList.contains('highlight')) {
            warrantyFeature.querySelector('h3').textContent = 'Premium Warranty';
            warrantyFeature.querySelector('p').textContent = 'Extended to 5-year warranty with accidental damage coverage';
            warrantyBtn.textContent = 'Revert to Standard';
        } else {
            warrantyFeature.querySelector('h3').textContent = 'Extended Warranty';
            warrantyFeature.querySelector('p').textContent = 'All products come with 2-year warranty';
            warrantyBtn.textContent = 'Upgrade Warranty';
        }
    });
    
    // Product details button functionality
    function showProductDetails() {
        // Get the parent product card
        const productCard = this.parentElement;
        const productName = productCard.querySelector('h3').textContent;
        
        // Toggle product details view
        if (this.textContent === 'View Details') {
            this.textContent = 'Hide Details';
            
            // Create and append price element
            const priceEl = document.createElement('p');
            priceEl.className = 'price fadeIn';
            priceEl.textContent = `Price: $${Math.floor(Math.random() * 900) + 100}`;
            productCard.insertBefore(priceEl, this);
            
            // Create and append stock status
            const stockEl = document.createElement('p');
            stockEl.className = 'stock fadeIn';
            stockEl.textContent = `In Stock: ${Math.random() > 0.3 ? 'Yes' : 'No'}`;
            productCard.insertBefore(stockEl, this);
            
            // Change the product card style
            productCard.style.backgroundColor = 'var(--primary-color)';
            productCard.style.color = 'white';
            
        } else {
            this.textContent = 'View Details';
            
            // Remove added elements
            productCard.querySelector('.price').remove();
            productCard.querySelector('.stock').remove();
            
            // Reset the product card style
            productCard.style.backgroundColor = '';
            productCard.style.color = '';
        }
    }
    
    // Add event listeners to all detail buttons
    detailButtons.forEach(button => {
        button.addEventListener('click', showProductDetails);
    });
    
    // Easter egg: Double click on logo changes its color
    document.querySelector('.logo').addEventListener('dblclick', function() {
        this.style.color = `hsl(${Math.floor(Math.random() * 360)}, 80%, 60%)`;
    });
});