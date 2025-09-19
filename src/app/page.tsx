
export default function Home() {
  return (
    <div dangerouslySetInnerHTML={{ __html: `
      <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Farm-to-Campus Produce Alerter</title>
          <style>
              /* General Body Styling */
              body {
                  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
                  margin: 0;
                  padding: 0;
                  background-color: #FDFDFB;
                  color: #333;
              }

              /* Header Styling */
              header {
                  background-color: #4CAF50; /* A friendly green */
                  color: white;
                  padding: 1.5rem;
                  text-align: center;
                  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
              }
              header h1 {
                  margin: 0;
                  font-size: 2.5rem;
                  font-weight: 600;
              }
              header p {
                  margin: 0.5rem 0 0;
                  font-size: 1.2rem;
                  font-style: italic;
              }

              /* Main Content Section */
              main {
                  padding: 2rem;
                  max-width: 1200px;
                  margin: 0 auto;
              }
              main h2 {
                  text-align: center;
                  font-size: 2rem;
                  color: #2E7D32; /* A darker green */
                  margin-bottom: 2rem;
              }

              /* Produce Grid */
              #produce-list {
                  display: grid;
                  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
                  gap: 1.5rem;
              }

              /* Individual Produce Card */
              .produce-card {
                  background-color: white;
                  border: 1px solid #ddd;
                  border-radius: 8px;
                  overflow: hidden;
                  box-shadow: 0 4px 8px rgba(0,0,0,0.05);
                  transition: transform 0.2s, box-shadow 0.2s;
              }
              .produce-card:hover {
                  transform: translateY(-5px);
                  box-shadow: 0 8px 16px rgba(0,0,0,0.1);
              }
              .produce-card img {
                  width: 100%;
                  height: 200px;
                  object-fit: cover;
              }
              .produce-details {
                  padding: 1rem;
              }
              .produce-details h3 {
                  margin: 0 0 0.5rem;
                  font-size: 1.5rem;
                  color: #333;
              }
              .price {
                  font-size: 1.2rem;
                  font-weight: bold;
                  color: #4CAF50;
                  margin-bottom: 0.5rem;
              }
              .availability {
                  font-weight: 500;
                  padding: 0.3rem 0.6rem;
                  border-radius: 4px;
                  display: inline-block;
              }
              .availability.in-stock {
                  background-color: #E8F5E9; /* Light green */
                  color: #2E7D32;
              }
              .availability.sold-out {
                  background-color: #FFEBEE; /* Light red */
                  color: #C62828;
              }

              /* Footer Styling */
              footer {
                  text-align: center;
                  padding: 2rem;
                  margin-top: 2rem;
                  background-color: #f4f4f4;
                  color: #555;
                  font-size: 0.9rem;
              }
              
              /* Responsive Design */
              @media (max-width: 600px) {
                  header h1 {
                      font-size: 2rem;
                  }
                  main {
                      padding: 1rem;
                  }
              }
          </style>
      </head>
      <body>

          <!-- Header Section -->
          <header>
              <h1>Farm-to-Campus Produce Alerter</h1>
              <p>Fresh, Local, and Affordable.</p>
          </header>

          <!-- Main Content: Produce Listings -->
          <main>
              <h2>Today's Fresh Produce</h2>
              <div id="produce-list">
                  <!-- Produce items will be injected here by JavaScript -->
              </div>
          </main>

          <!-- Footer Section -->
          <footer>
              <p>Built with 🌱 to reduce food waste & support students.</p>
          </footer>

          <script>
              // Sample data for produce items. Easy to update this list.
              const sampleProduce = [
                  {
                      name: "Organic Apples",
                      price: "$2.50/lb",
                      image: "https://picsum.photos/seed/apples/400/300",
                      inStock: true
                  },
                  {
                      name: "Heirloom Tomatoes",
                      price: "$3.00/lb",
                      image: "https://picsum.photos/seed/tomatoes/400/300",
                      inStock: true
                  },
                  {
                      name: "Fresh Kale",
                      price: "$1.50/bunch",
                      image: "https://picsum.photos/seed/kale/400/300",
                      inStock: false
                  },
                  {
                      name: "Sweet Strawberries",
                      price: "$4.00/quart",
                      image: "https://picsum.photos/seed/strawberries/400/300",
                      inStock: true
                  },
                  {
                      name: "Rainbow Carrots",
                      price: "$2.00/bunch",
                      image: "https://picsum.photos/seed/carrots/400/300",
                      inStock: true
                  },
                  {
                      name: "Zucchini Squash",
                      price: "$1.00/each",
                      image: "https://picsum.photos/seed/zucchini/400/300",
                      inStock: false
                  }
              ];

              /**
               * This function takes the sample produce data and generates the HTML
               * to display it on the page.
               */
              function displayProduce() {
                  const produceListContainer = document.getElementById('produce-list');
                  
                  // Clear any existing content
                  produceListContainer.innerHTML = '';

                  // Loop through the data and create a card for each item
                  sampleProduce.forEach(item => {
                      const availabilityClass = item.inStock ? 'in-stock' : 'sold-out';
                      const availabilityText = item.inStock ? 'In Stock' : 'Sold Out';

                      const card = document.createElement('div');
                      card.className = 'produce-card';
                      card.innerHTML = \`
                          <img src="\${item.image}" alt="\${item.name}">
                          <div class="produce-details">
                              <h3>\${item.name}</h3>
                              <div class="price">\${item.price}</div>
                              <div class="availability \${availabilityClass}">\${availabilityText}</div>
                          </div>
                      \`;
                      produceListContainer.appendChild(card);
                  });
              }

              // Run the function when the page loads
              document.addEventListener('DOMContentLoaded', displayProduce);
          </script>

      </body>
      </html>
    ` }} />
  );
}
