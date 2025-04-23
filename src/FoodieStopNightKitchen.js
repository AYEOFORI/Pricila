import React, { useState } from "react";

export default function FoodieStopNightKitchen() {
  const [showReservation, setShowReservation] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [customOrder, setCustomOrder] = useState("");

  const whatsappLink = (item) =>
    `https://wa.me/233555812850?text=Hi,%20I%20would%20like%20to%20order%20${encodeURIComponent(item)}`;

  const handleSubscribe = () => {
    if (newsletterEmail) {
      setSubscribed(true);
      setNewsletterEmail("");
      alert("Thanks for subscribing to our newsletter!");
    }
  };

  const handleCustomOrder = () => {
    if (customOrder.trim()) {
      window.open(
        `https://wa.me/233555812850?text=Hi,%20I%20would%20like%20to%20custom%20order:%20${encodeURIComponent(customOrder)}`,
        '_blank'
      );
    }
  };

  const menuItems = [
    {
      name: "Jollof Rice with Chicken",
      emoji: "🍗",
      description: "Spicy jollof rice served with grilled chicken and salad."
    },
    {
      name: "Fried Rice with Sausages",
      emoji: "🍛",
      description: "Savory fried rice mixed with juicy sausages and vegetables."
    },
    {
      name: "Waakye with Wele and Egg",
      emoji: "🥘",
      description: "Classic waakye paired with wele, boiled egg, and shito."
    },
    {
      name: "Yam and Palava Sauce",
      emoji: "🍲",
      description: "Boiled yam with richly flavored palava sauce."
    },
    {
      name: "Meat Pie & Soft Drinks",
      emoji: "🥪",
      description: "Freshly baked meat pie served with a choice of soft drink."
    },
  ];

  return (
    <div style={{ fontFamily: "Segoe UI, sans-serif", color: "#222", backgroundColor: "#ffffff", fontSize: 12 }}>
      <nav style={{ backgroundColor: "#f5a623", padding: "10px 20px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <h1 style={{ fontSize: 24, fontWeight: "bold", color: "#001f3f", letterSpacing: 5 }}>FOODIE</h1>
          <div className="nav-links" style={{ display: "flex", gap: 20, alignItems: "center" }}>
            <button style={{ color: "#001f3f", fontWeight: "bold", background: "none", border: "none" }}>OUR STORY</button>
            <button style={{ color: "#001f3f", fontWeight: "bold", background: "none", border: "none" }}>MENUS</button>
            <button style={{ color: "#001f3f", fontWeight: "bold", background: "none", border: "none" }}>EVENTS</button>
            <button style={{ color: "#001f3f", fontWeight: "bold", background: "none", border: "none" }}>CONTACT</button>
            <button style={{ color: "#001f3f", fontWeight: "bold", background: "none", border: "none" }}>GIFT CARDS</button>
            <button
              onClick={() => setShowReservation(!showReservation)}
              style={{ padding: "8px 16px", background: "#001f3f", color: "#f5a623", fontWeight: "bold", borderRadius: 6 }}
            >
              RESERVATIONS
            </button>
          </div>
        </div>
      </nav>

      <section style={{ padding: '20px', textAlign: 'center' }}>
        <h2 style={{ fontSize: 20, marginBottom: 5 }}>🍽 The Foodie Stop</h2>
        <p>Night Kitchen – Accra, Burma Camp</p>
        <p>Open: 7 PM – 5 AM | 📞 0555812850</p>
      </section>

      <section style={{ padding: '40px 20px', backgroundColor: '#fff8e1', textAlign: 'center' }}>
        <h3 style={{ fontSize: 22, marginBottom: 20 }}>Featured Dishes</h3>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '30px', flexWrap: 'wrap' }}>
          <img src="/images/food1.jpg" alt="Dish 1" style={{ width: "300px", height: "auto", borderRadius: 12 }} />
          <img src="/images/food2.jpg" alt="Dish 2" style={{ width: "300px", height: "auto", borderRadius: 12 }} />
          <img src="/images/food3.jpg" alt="Dish 3" style={{ width: "300px", height: "auto", borderRadius: 12 }} />
          <img src="/images/food4.jpg" alt="Dish 4" style={{ width: "300px", height: "auto", borderRadius: 12 }} />
        </div>
      </section>

      <section style={{ 
        padding: '30px 20px', 
        textAlign: 'center', 
        backgroundImage: "url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        backgroundBlendMode: 'lighten',
        position: 'relative'
      }}>
        <div style={{
          backgroundColor: 'rgba(255, 243, 224, 0.85)',
          padding: '20px',
          borderRadius: '8px'
        }}>
          <h3 style={{ marginBottom: 15, color: '#d84315' }}>Available Foods</h3>
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            {menuItems.map((item, idx) => (
              <li key={idx} style={{ marginBottom: 15 }}>
                <a
                  href={whatsappLink(item.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: '#d84315', fontWeight: 'bold', display: 'block', marginBottom: 5 }}
                >
                  {item.emoji} {item.name}
                </a>
                <p style={{ fontSize: 12, color: '#555', margin: 0 }}>{item.description}</p>
              </li>
            ))}
          </ul>

          <div style={{ marginTop: 30 }}>
            <h4 style={{ marginBottom: 10 }}>Or describe your order below</h4>
            <textarea
              placeholder="Describe your food here (e.g. Jollof with extra shito and salad)"
              value={customOrder}
              onChange={(e) => setCustomOrder(e.target.value)}
              rows={4}
              style={{ width: '80%', padding: 10, borderRadius: 6, border: '1px solid #ccc', marginBottom: 10 }}
            />
            <br />
            <button
              onClick={handleCustomOrder}
              style={{ padding: '10px 20px', backgroundColor: '#25D366', color: 'white', border: 'none', borderRadius: 6, fontWeight: 'bold' }}
            >
              Send Custom Order on WhatsApp
            </button>
          </div>
        </div>
      </section>

      <section style={{ padding: '40px 20px', backgroundColor: '#e3f2fd', textAlign: 'center' }}>
        <h3 style={{ marginBottom: 15 }}>📬 Join Our Newsletter</h3>
        <p style={{ marginBottom: 10 }}>Be the first to get updates on new dishes, promotions and more!</p>
        <input
          type="email"
          placeholder="Enter your email"
          value={newsletterEmail}
          onChange={(e) => setNewsletterEmail(e.target.value)}
          style={{ padding: '8px', borderRadius: 5, border: '1px solid #ccc', width: 250 }}
        />
        <button
          onClick={handleSubscribe}
          style={{ marginLeft: 10, padding: '8px 16px', backgroundColor: '#2196f3', color: 'white', border: 'none', borderRadius: 5, fontWeight: 'bold' }}
        >
          Subscribe
        </button>
        {subscribed && <p style={{ marginTop: 10, color: 'green' }}>✅ You're now subscribed!</p>}
      </section>

      <section style={{ padding: '10px 20px', fontSize: 12, color: '#444' }}>
        <h4>Terms and Conditions</h4>
        <p>
          Orders should be placed at least 30 minutes before closing. Payments are accepted via MoMo or cash on delivery.
          No refunds after food has been dispatched. For complaints, contact us within 12 hours of delivery.
        </p>
        <p>
          🍴 Please note: Our dishes may contain allergens such as nuts, dairy, gluten, or shellfish. Let us know if you have any dietary restrictions.
        </p>
      </section>

      <footer style={{ backgroundColor: "#001f3f", color: "white", padding: 20, textAlign: "center" }}>
        <p>📍 Accra, Burma Camp | 📞 0555812850 | ✉️ info@foodiestop.com</p>
        <p>Follow us on Facebook & Instagram: @FoodieStopGH</p>
        <p>View our location on <a href="https://www.google.com/maps/place/Burma+Camp,+Accra" target="_blank" rel="noopener noreferrer" style={{ color: "#f5a623", textDecoration: "underline" }}>Google Maps</a></p>
        <p style={{ marginTop: 10, color: "#ccc" }}>© 2025 The Foodie Stop Night Kitchen. All rights reserved.</p>
        <p style={{ marginTop: 20, fontSize: 10, color: '#aaa' }}>Site visits: 1234</p>
      </footer>
    </div>
  );
}