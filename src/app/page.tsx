
export default function Home() {
  return (
    <div dangerouslySetInnerHTML={{ __html: `
      <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Campus Harvest Alert</title>
          <link rel="preconnect" href="https://fonts.googleapis.com">
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
          <link href="https://fonts.googleapis.com/css2?family=Belleza&family=Alegreya:wght@400;700&display=swap" rel="stylesheet">
          <style>
              :root {
                  --primary-color: #A3BE8C;
                  --background-color: #F5F2E7;
                  --accent-color: #B38B6D;
                  --text-color: #333333;
                  --card-background: #FFFFFF;
                  --border-color: #E0E0E0;
                  --font-headline: 'Belleza', sans-serif;
                  --font-body: 'Alegreya', serif;
              }

              body.dark-mode {
                  --primary-color: #81a171;
                  --background-color: #2c2c2c;
                  --accent-color: #9c7a5f;
                  --text-color: #f1f1f1;
                  --card-background: #3a3a3a;
                  --border-color: #4f4f4f;
              }

              body {
                  font-family: var(--font-body);
                  margin: 0;
                  padding: 0;
                  background-color: var(--background-color);
                  color: var(--text-color);
                  transition: background-color 0.3s, color 0.3s;
              }

              .container {
                  max-width: 1200px;
                  margin: 0 auto;
                  padding: 0 1rem;
              }

              header {
                  background-color: var(--primary-color);
                  color: white;
                  padding: 1rem 0;
                  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
                  position: sticky;
                  top: 0;
                  z-index: 10;
              }

              .header-content {
                  display: flex;
                  justify-content: space-between;
                  align-items: center;
              }

              header h1 {
                  font-family: var(--font-headline);
                  margin: 0;
                  font-size: 2rem;
              }

              #theme-toggle {
                  background: none;
                  border: 2px solid white;
                  border-radius: 50%;
                  cursor: pointer;
                  padding: 8px;
                  width: 40px;
                  height: 40px;
                  display: flex;
                  justify-content: center;
                  align-items: center;
              }

              #theme-toggle .icon {
                  font-size: 1.2rem;
                  color: white;
              }

              main {
                  padding: 2rem 0;
              }

              .page-intro {
                  text-align: center;
                  margin-bottom: 2.5rem;
              }

              .page-intro h2 {
                  font-family: var(--font-headline);
                  font-size: 2.5rem;
                  color: var(--accent-color);
                  margin: 0 0 0.5rem;
              }

              .page-intro p {
                  font-size: 1.1rem;
                  max-width: 600px;
                  margin: 0 auto;
              }

              .filter-controls {
                  display: flex;
                  justify-content: center;
                  gap: 0.5rem;
                  margin-bottom: 2rem;
              }

              .filter-btn {
                  font-family: var(--font-body);
                  font-size: 1rem;
                  padding: 0.5rem 1rem;
                  border: 1px solid var(--border-color);
                  background-color: var(--card-background);
                  color: var(--text-color);
                  border-radius: 20px;
                  cursor: pointer;
                  transition: all 0.2s ease-in-out;
              }

              .filter-btn:hover {
                  background-color: var(--accent-color);
                  color: white;
                  border-color: var(--accent-color);
              }

              .filter-btn.active {
                  background-color: var(--primary-color);
                  color: white;
                  border-color: var(--primary-color);
              }

              #produce-grid {
                  display: grid;
                  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
                  gap: 1.5rem;
              }

              .produce-card {
                  background-color: var(--card-background);
                  border: 1px solid var(--border-color);
                  border-radius: 12px;
                  overflow: hidden;
                  box-shadow: 0 4px 12px rgba(0,0,0,0.05);
                  transition: transform 0.3s, box-shadow 0.3s, background-color 0.3s, border-color 0.3s;
                  opacity: 0;
                  animation: fadeIn 0.5s ease-out forwards;
              }
              
              @keyframes fadeIn {
                  from { opacity: 0; transform: translateY(20px); }
                  to { opacity: 1; transform: translateY(0); }
              }

              .produce-card:hover {
                  transform: translateY(-5px);
                  box-shadow: 0 8px 20px rgba(0,0,0,0.1);
              }

              .card-image {
                  width: 100%;
                  height: 200px;
                  object-fit: cover;
              }

              .card-content {
                  padding: 1rem;
              }

              .card-header {
                  display: flex;
                  justify-content: space-between;
                  align-items: flex-start;
              }
              
              .card-content h3 {
                  font-family: var(--font-headline);
                  font-size: 1.5rem;
                  margin: 0 0 0.5rem;
              }

              .price {
                  font-size: 1.2rem;
                  font-weight: bold;
                  color: var(--primary-color);
                  margin-bottom: 0.5rem;
              }

              .availability {
                  padding: 0.25rem 0.75rem;
                  border-radius: 12px;
                  font-size: 0.8rem;
                  font-weight: 700;
                  text-transform: uppercase;
              }
              .in-stock { background-color: #E8F5E9; color: #2E7D32; }
              .sold-out { background-color: #FFEBEE; color: #C62828; }

              body.dark-mode .in-stock { background-color: #385b3a; color: #b2d8b5; }
              body.dark-mode .sold-out { background-color: #792e2e; color: #f1c1c1; }

              .sold-out-card {
                  opacity: 0.6;
                  pointer-events: none;
              }

              footer {
                  text-align: center;
                  padding: 2rem;
                  margin-top: 2rem;
                  background-color: #f4f4f4;
                  color: #555;
                  font-size: 0.9rem;
              }
              body.dark-mode footer {
                background-color: #222;
                color: #aaa;
              }

              @media (max-width: 600px) {
                  header h1 { font-size: 1.5rem; }
                  .page-intro h2 { font-size: 2rem; }
              }
          </style>
      </head>
      <body>

          <header>
            <div class="container header-content">
              <h1>🌱 Campus Harvest Alert</h1>
              <button id="theme-toggle" title="Toggle dark/light mode">
                <span class="icon">☀️</span>
              </button>
            </div>
          </header>

          <main class="container">
              <div class="page-intro">
                <h2>Today's Fresh Produce</h2>
                <p>Fresh from local farms, right to your campus. Find out what's available today!</p>
              </div>

              <div class="filter-controls">
                <button class="filter-btn active" data-filter="all">All</button>
                <button class="filter-btn" data-filter="fruit">Fruits</button>
                <button class="filter-btn" data-filter="vegetable">Vegetables</button>
                <button class="filter-btn" data-filter="herb">Herbs</button>
              </div>
              
              <div id="produce-grid">
                  <!-- Produce cards will be injected here -->
              </div>
          </main>

          <footer>
              <p>Built with ❤️ to reduce food waste & support students.</p>
          </footer>

          <script>
              const produceData = [
                  { name: "Organic Apples", price: "$2.50/lb", image: "https://picsum.photos/seed/apples/400/300", available: true, category: 'fruit' },
                  { name: "Heirloom Tomatoes", price: "$3.00/lb", image: "https://picsum.photos/seed/tomatoes/400/300", available: true, category: 'fruit' },
                  { name: "Fresh Kale", price: "$1.50/bunch", image: "https://picsum.photos/seed/kale/400/300", available: false, category: 'vegetable' },
                  { name: "Sweet Strawberries", price: "$4.00/quart", image: "https://picsum.photos/seed/strawberries/400/300", available: true, category: 'fruit' },
                  { name: "Rainbow Carrots", price: "$2.00/bunch", image: "https://picsum.photos/seed/carrots/400/300", available: true, category: 'vegetable' },
                  { name: "Fresh Basil", price: "$1.25/bunch", image: "https://picsum.photos/seed/basil/400/300", available: true, category: 'herb' },
                  { name: "Zucchini Squash", price: "$1.00/each", image: "https://picsum.photos/seed/zucchini/400/300", available: false, category: 'vegetable' }
              ];

              function renderProduce(filter = 'all') {
                  const grid = document.getElementById('produce-grid');
                  grid.innerHTML = '';
                  
                  const filteredData = filter === 'all' 
                      ? produceData 
                      : produceData.filter(p => p.category === filter);

                  filteredData.forEach((item, index) => {
                      const availabilityClass = item.available ? 'in-stock' : 'sold-out';
                      const availabilityText = item.available ? 'In Stock' : 'Sold Out';
                      
                      const card = document.createElement('div');
                      card.className = \`produce-card \${!item.available ? 'sold-out-card' : ''}\`;
                      card.style.animationDelay = \`\${index * 50}ms\`;
                      card.innerHTML = \`
                          <img src="\${item.image}" alt="\${item.name}" class="card-image">
                          <div class="card-content">
                            <div class="card-header">
                              <h3>\${item.name}</h3>
                              <div class="availability \${availabilityClass}">\${availabilityText}</div>
                            </div>
                              <p class="price">\${item.price}</p>
                          </div>
                      \`;
                      grid.appendChild(card);
                  });
              }

              document.addEventListener('DOMContentLoaded', () => {
                  renderProduce();

                  const filterButtons = document.querySelectorAll('.filter-btn');
                  filterButtons.forEach(btn => {
                    btn.addEventListener('click', () => {
                      filterButtons.forEach(b => b.classList.remove('active'));
                      btn.classList.add('active');
                      renderProduce(btn.dataset.filter);
                    });
                  });

                  // Theme switcher logic
                  const themeToggle = document.getElementById('theme-toggle');
                  const themeIcon = themeToggle.querySelector('.icon');
                  const currentTheme = localStorage.getItem('theme');

                  const setDarkMode = (isDark) => {
                    if (isDark) {
                        document.body.classList.add('dark-mode');
                        themeIcon.textContent = '🌙';
                        localStorage.setItem('theme', 'dark');
                    } else {
                        document.body.classList.remove('dark-mode');
                        themeIcon.textContent = '☀️';
                        localStorage.setItem('theme', 'light');
                    }
                  }

                  if (currentTheme === 'dark') {
                      setDarkMode(true);
                  } else {
                      setDarkMode(false);
                  }

                  themeToggle.addEventListener('click', () => {
                      const isDarkMode = document.body.classList.contains('dark-mode');
                      setDarkMode(!isDarkMode);
                  });
              });
          </script>

      </body>
      </html>
    ` }} />
  );
}

    