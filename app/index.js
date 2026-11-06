const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 8080;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

const vehicles = [
  {
    id: "tata-nexon-ev",
    name: "Tata Nexon EV",
    brand: "Tata",
    type: "Car",
    price: 1450000,
    range: 489,
    battery: 45,
    charging: "10–80% in around 40 minutes (DC fast charging)",
    description: "A compact electric SUV designed for everyday city and highway driving.",
    image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "mg-zs-ev",
    name: "MG ZS EV",
    brand: "MG",
    type: "Car",
    price: 1898000,
    range: 461,
    battery: 50.3,
    charging: "10–80% in around 60 minutes (DC fast charging)",
    description: "An electric SUV with a spacious cabin and connected-car features.",
    image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "ather-450x",
    name: "Ather 450X",
    brand: "Ather",
    type: "Scooter",
    price: 140000,
    range: 126,
    battery: 3.7,
    charging: "Home charging; fast charging availability depends on network",
    description: "A connected electric scooter built for urban commuting.",
    image: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "ola-s1-pro",
    name: "Ola S1 Pro",
    brand: "Ola",
    type: "Scooter",
    price: 130000,
    range: 195,
    battery: 4,
    charging: "Home charging; charging time varies by charger",
    description: "An electric scooter with a feature-rich dashboard and multiple riding modes.",
    image: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "tvs-iqube",
    name: "TVS iQube",
    brand: "TVS",
    type: "Scooter",
    price: 115000,
    range: 100,
    battery: 3.4,
    charging: "Home charging; charging time varies by variant",
    description: "A practical electric scooter focused on daily city use.",
    image: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "mahindra-xuv400",
    name: "Mahindra XUV400",
    brand: "Mahindra",
    type: "Car",
    price: 1560000,
    range: 456,
    battery: 39.4,
    charging: "10–80% in around 50 minutes (DC fast charging)",
    description: "An electric SUV with a roomy interior and practical everyday range.",
    image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&w=1200&q=80"
  }
];

app.get("/", (req, res) => {
  const featured = vehicles.slice(0, 3);
  res.render("index", { vehicles, featured, query: "", type: "All" });
});

app.get("/vehicles", (req, res) => {
  const query = (req.query.q || "").trim().toLowerCase();
  const type = req.query.type || "All";
  const filtered = vehicles.filter((vehicle) => {
    const matchesQuery = !query ||
      vehicle.name.toLowerCase().includes(query) ||
      vehicle.brand.toLowerCase().includes(query);
    const matchesType = type === "All" || vehicle.type === type;
    return matchesQuery && matchesType;
  });
  res.render("vehicles", { vehicles: filtered, query: req.query.q || "", type });
});

app.get("/vehicles/:id", (req, res) => {
  const vehicle = vehicles.find((item) => item.id === req.params.id);
  if (!vehicle) return res.status(404).render("404");
  res.render("vehicle-details", { vehicle });
});

app.get("/health", (req, res) => {
  res.status(200).json({ status: "ok", service: "ev-platform" });
});

app.get("/robots.txt", (req, res) => {
  res.type("text/plain").send("User-agent: *\nAllow: /\n");
});

app.use((req, res) => res.status(404).render("404"));

app.listen(PORT, "0.0.0.0", () => {
  console.log(`EV Platform running on port ${PORT}`);
});
