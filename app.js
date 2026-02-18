const VEHICLES = [
  { id: "V001", year: 2020, make: "Toyota", model: "Camry", type: "Sedan" },
  { id: "V002", year: 2021, make: "Toyota", model: "Corolla", type: "Sedan" },
  { id: "V003", year: 2019, make: "Honda", model: "Civic", type: "Sedan" },
  { id: "V004", year: 2022, make: "Honda", model: "Accord", type: "Sedan" },
  { id: "V005", year: 2020, make: "Ford", model: "F-150", type: "Truck" },
  { id: "V006", year: 2021, make: "Ford", model: "Escape", type: "SUV" },
  { id: "V007", year: 2023, make: "Chevrolet", model: "Silverado", type: "Truck" },
  { id: "V008", year: 2021, make: "Chevrolet", model: "Malibu", type: "Sedan" },
  { id: "V009", year: 2022, make: "Nissan", model: "Altima", type: "Sedan" },
  { id: "V010", year: 2020, make: "Nissan", model: "Rogue", type: "SUV" },
  { id: "V011", year: 2024, make: "Tesla", model: "Model 3", type: "Sedan" },
  { id: "V012", year: 2023, make: "BMW", model: "X5", type: "SUV" },
  { id: "V013", year: 2018, make: "Toyota", model: "RAV4", type: "SUV" },
  { id: "V014", year: 2022, make: "Hyundai", model: "Elantra", type: "Sedan" },
  { id: "V015", year: 2021, make: "Kia", model: "Sportage", type: "SUV" },
  { id: "V016", year: 2024, make: "Audi", model: "Q5", type: "SUV" },
  { id: "V017", year: 2020, make: "Mazda", model: "CX-5", type: "SUV" },
  { id: "V018", year: 2023, make: "Subaru", model: "Outback", type: "Wagon" },
  { id: "V019", year: 2019, make: "Volkswagen", model: "Jetta", type: "Sedan" },
  { id: "V020", year: 2024, make: "Mercedes", model: "C300", type: "Sedan" }
];

const ZONES = [
  { id: "all", label: "All Zones" },
  { id: "front", label: "Front" },
  { id: "rear", label: "Rear" },
  { id: "left", label: "Left Side" },
  { id: "right", label: "Right Side" },
  { id: "top", label: "Top" },
  { id: "bottom", label: "Bottom" }
];

const ZONE_ORDER = ["front", "rear", "left", "right", "top", "bottom"];

const PART_BLUEPRINTS = [
  { code: "HOOD", name: "Hood", category: "Body", zone: "front", basePrice: 305 },
  { code: "FRONT_BUMPER", name: "Front Bumper", category: "Body", zone: "front", basePrice: 265 },
  { code: "GRILLE", name: "Grille", category: "Body", zone: "front", basePrice: 178 },
  { code: "RADIATOR_SUPPORT", name: "Radiator Support", category: "Body", zone: "front", basePrice: 190 },
  { code: "HEADLIGHT_LEFT", name: "Left Headlight", category: "Lighting", zone: "front", basePrice: 210 },
  { code: "HEADLIGHT_RIGHT", name: "Right Headlight", category: "Lighting", zone: "front", basePrice: 210 },
  { code: "FOG_LIGHT_LEFT", name: "Left Fog Light", category: "Lighting", zone: "front", basePrice: 88 },
  { code: "FOG_LIGHT_RIGHT", name: "Right Fog Light", category: "Lighting", zone: "front", basePrice: 88 },
  { code: "FENDER_LEFT", name: "Left Fender", category: "Body", zone: "left", basePrice: 140 },
  { code: "FENDER_RIGHT", name: "Right Fender", category: "Body", zone: "right", basePrice: 140 },
  { code: "MIRROR_LEFT", name: "Left Mirror", category: "Mirror", zone: "left", basePrice: 136 },
  { code: "MIRROR_RIGHT", name: "Right Mirror", category: "Mirror", zone: "right", basePrice: 136 },
  { code: "DOOR_FRONT_LEFT", name: "Front Left Door", category: "Body", zone: "left", basePrice: 240 },
  { code: "DOOR_FRONT_RIGHT", name: "Front Right Door", category: "Body", zone: "right", basePrice: 240 },
  { code: "DOOR_REAR_LEFT", name: "Rear Left Door", category: "Body", zone: "left", basePrice: 235 },
  { code: "DOOR_REAR_RIGHT", name: "Rear Right Door", category: "Body", zone: "right", basePrice: 235 },
  { code: "SIDE_SKIRT_LEFT", name: "Left Side Skirt", category: "Body", zone: "bottom", basePrice: 126 },
  { code: "SIDE_SKIRT_RIGHT", name: "Right Side Skirt", category: "Body", zone: "bottom", basePrice: 126 },
  { code: "REAR_BUMPER", name: "Rear Bumper", category: "Body", zone: "rear", basePrice: 275 },
  { code: "TRUNK_LID", name: "Trunk Lid", category: "Body", zone: "rear", basePrice: 285 },
  { code: "TAIL_LIGHT_LEFT", name: "Left Tail Light", category: "Lighting", zone: "rear", basePrice: 142 },
  { code: "TAIL_LIGHT_RIGHT", name: "Right Tail Light", category: "Lighting", zone: "rear", basePrice: 142 },
  { code: "REAR_QUARTER_LEFT", name: "Left Rear Quarter Panel", category: "Body", zone: "left", basePrice: 252 },
  { code: "REAR_QUARTER_RIGHT", name: "Right Rear Quarter Panel", category: "Body", zone: "right", basePrice: 252 },
  { code: "ROOF_PANEL", name: "Roof Panel", category: "Body", zone: "top", basePrice: 382 },
  { code: "SUNROOF_GLASS", name: "Sunroof Glass", category: "Glass", zone: "top", basePrice: 245 },
  { code: "WINDSHIELD", name: "Windshield", category: "Glass", zone: "top", basePrice: 308 },
  { code: "REAR_GLASS", name: "Rear Glass", category: "Glass", zone: "top", basePrice: 259 },
  { code: "UNDER_COVER", name: "Engine Under Cover", category: "Underbody", zone: "bottom", basePrice: 118 },
  { code: "SPLASH_SHIELD_LEFT", name: "Left Splash Shield", category: "Underbody", zone: "bottom", basePrice: 66 },
  { code: "SPLASH_SHIELD_RIGHT", name: "Right Splash Shield", category: "Underbody", zone: "bottom", basePrice: 66 },
  { code: "FENDER_LINER_LEFT", name: "Left Fender Liner", category: "Underbody", zone: "left", basePrice: 82 },
  { code: "FENDER_LINER_RIGHT", name: "Right Fender Liner", category: "Underbody", zone: "right", basePrice: 82 }
];

const REGION_BY_ZONE = {
  front: "front",
  rear: "rear",
  left: "side-left",
  right: "side-right",
  top: "top",
  bottom: "bottom"
};

const partCache = new Map();

const state = {
  cart: JSON.parse(localStorage.getItem("abp-cart") || "[]"),
  selectedVehicleId: "",
  selectedPartId: "",
  vehicleSearch: "",
  vehicleYear: "all",
  vehicleMake: "all",
  vehicleType: "all",
  partSearch: "",
  zoneFilter: "all"
};

const els = {
  yearFilter: document.getElementById("yearFilter"),
  makeFilter: document.getElementById("makeFilter"),
  typeFilter: document.getElementById("typeFilter"),
  vehicleSearch: document.getElementById("vehicleSearch"),
  vehicleSelect: document.getElementById("vehicleSelect"),
  vehicleCount: document.getElementById("vehicleCount"),
  selectedVehicleText: document.getElementById("selectedVehicleText"),
  zoneFilters: document.getElementById("zoneFilters"),
  partSelect: document.getElementById("partSelect"),
  partQty: document.getElementById("partQty"),
  addSelectedPart: document.getElementById("addSelectedPart"),
  partDetails: document.getElementById("partDetails"),
  selectedPartTag: document.getElementById("selectedPartTag"),
  highlightText: document.getElementById("highlightText"),
  partsCount: document.getElementById("partsCount"),
  partSearch: document.getElementById("partSearch"),
  areaFilter: document.getElementById("areaFilter"),
  vehicleParts: document.getElementById("vehicleParts"),
  cartToggle: document.getElementById("cartToggle"),
  closeCart: document.getElementById("closeCart"),
  cartPanel: document.getElementById("cartPanel"),
  cartItems: document.getElementById("cartItems"),
  cartCount: document.getElementById("cartCount"),
  orderForm: document.getElementById("orderForm"),
  distanceMiles: document.getElementById("distanceMiles"),
  shippingSpeed: document.getElementById("shippingSpeed"),
  etaText: document.getElementById("etaText"),
  totalText: document.getElementById("totalText"),
  confirmation: document.getElementById("confirmation")
};

function uniqueValues(values) {
  return [...new Set(values)].sort((a, b) => String(a).localeCompare(String(b), undefined, { numeric: true }));
}

function fillSelect(select, values, allLabel) {
  select.innerHTML = `<option value="all">${allLabel}</option>`;
  values.forEach((value) => {
    const option = document.createElement("option");
    option.value = String(value);
    option.textContent = String(value);
    select.append(option);
  });
}

function hashString(text) {
  let hash = 0;
  for (let i = 0; i < text.length; i += 1) {
    hash = (hash << 5) - hash + text.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash);
}

function getVehicleById(vehicleId) {
  return VEHICLES.find((vehicle) => vehicle.id === vehicleId) || null;
}

function getVehicleLabel(vehicle) {
  return `${vehicle.year} ${vehicle.make} ${vehicle.model} (${vehicle.type})`;
}

function getPartName(blueprint, vehicle) {
  if (blueprint.code !== "TRUNK_LID") return blueprint.name;
  if (vehicle.type === "Truck") return "Tailgate";
  if (vehicle.type === "SUV" || vehicle.type === "Wagon") return "Rear Hatch Door";
  return blueprint.name;
}

function generatePartsForVehicle(vehicle) {
  const typeFactor = { Sedan: 1, SUV: 1.1, Truck: 1.16, Wagon: 1.07 }[vehicle.type] || 1;
  const yearFactor = 1 + Math.max(0, vehicle.year - 2018) * 0.018;

  return PART_BLUEPRINTS.map((blueprint) => {
    const seed = hashString(`${vehicle.id}-${blueprint.code}`);
    const variation = 0.91 + (seed % 21) / 100;
    const price = Number((blueprint.basePrice * typeFactor * yearFactor * variation).toFixed(2));
    const stock = 3 + (seed % 16);

    return {
      id: `${vehicle.id}-${blueprint.code}`,
      sku: `ABP-${100000 + (seed % 899999)}`,
      vehicleId: vehicle.id,
      vehicleLabel: getVehicleLabel(vehicle),
      name: getPartName(blueprint, vehicle),
      category: blueprint.category,
      zone: blueprint.zone,
      price,
      stock
    };
  });
}

function getPartsForVehicle(vehicleId) {
  if (!vehicleId) return [];
  if (partCache.has(vehicleId)) return partCache.get(vehicleId);
  const vehicle = getVehicleById(vehicleId);
  if (!vehicle) return [];
  const parts = generatePartsForVehicle(vehicle);
  partCache.set(vehicleId, parts);
  return parts;
}

function getFilteredVehicles() {
  return VEHICLES.filter((vehicle) => {
    const yearMatch = state.vehicleYear === "all" || String(vehicle.year) === state.vehicleYear;
    const makeMatch = state.vehicleMake === "all" || vehicle.make === state.vehicleMake;
    const typeMatch = state.vehicleType === "all" || vehicle.type === state.vehicleType;
    const term = state.vehicleSearch.toLowerCase();
    const termMatch = !term || `${vehicle.year} ${vehicle.make} ${vehicle.model} ${vehicle.type}`.toLowerCase().includes(term);
    return yearMatch && makeMatch && typeMatch && termMatch;
  });
}

function getFilteredParts() {
  const parts = getPartsForVehicle(state.selectedVehicleId);
  return parts.filter((part) => {
    const zoneMatch = state.zoneFilter === "all" || part.zone === state.zoneFilter;
    const term = state.partSearch.toLowerCase();
    const termMatch = !term || `${part.name} ${part.category} ${part.sku}`.toLowerCase().includes(term);
    return zoneMatch && termMatch;
  });
}

function getSelectedPart() {
  if (!state.selectedPartId || !state.selectedVehicleId) return null;
  return getPartsForVehicle(state.selectedVehicleId).find((part) => part.id === state.selectedPartId) || null;
}

function clearHighlight() {
  ["front", "rear", "side-left", "side-right", "top", "bottom", "center"].forEach((region) => {
    const node = document.getElementById(`region-${region}`);
    if (node) node.classList.remove("active");
  });
}

function highlightZone(zone) {
  clearHighlight();
  const region = REGION_BY_ZONE[zone];
  if (!region) return;
  const node = document.getElementById(`region-${region}`);
  if (node) node.classList.add("active");
}

function renderVehicleFilterOptions() {
  fillSelect(els.yearFilter, uniqueValues(VEHICLES.map((vehicle) => vehicle.year)), "All Years");
  fillSelect(els.makeFilter, uniqueValues(VEHICLES.map((vehicle) => vehicle.make)), "All Makes");
  fillSelect(els.typeFilter, uniqueValues(VEHICLES.map((vehicle) => vehicle.type)), "All Types");
}

function renderVehicleSelection() {
  const vehicles = getFilteredVehicles();
  els.vehicleCount.textContent = `${vehicles.length} matches`;

  els.vehicleSelect.innerHTML = '<option value="">Select vehicle</option>';
  vehicles.forEach((vehicle) => {
    const option = document.createElement("option");
    option.value = vehicle.id;
    option.textContent = getVehicleLabel(vehicle);
    els.vehicleSelect.append(option);
  });

  if (!vehicles.some((vehicle) => vehicle.id === state.selectedVehicleId)) {
    state.selectedVehicleId = "";
    state.selectedPartId = "";
  }

  els.vehicleSelect.value = state.selectedVehicleId;
  els.vehicleSelect.disabled = vehicles.length === 0;
}

function renderZoneFilters() {
  els.zoneFilters.innerHTML = ZONES.map((zone) => `<button class="zone-btn ${state.zoneFilter === zone.id ? "active" : ""}" type="button" data-zone="${zone.id}">${zone.label}</button>`).join("");

  document.querySelectorAll("[data-zone]").forEach((button) => {
    button.addEventListener("click", () => {
      state.zoneFilter = button.getAttribute("data-zone") || "all";
      els.areaFilter.value = state.zoneFilter;

      const selected = getSelectedPart();
      if (selected && state.zoneFilter !== "all" && selected.zone !== state.zoneFilter) {
        state.selectedPartId = "";
      }

      renderZoneFilters();
      renderPartSelect();
      renderSelectedVehicleParts();
      updateSelectedPartPanel();

      if (state.zoneFilter !== "all" && !state.selectedPartId) {
        highlightZone(state.zoneFilter);
      }
    });
  });
}

function renderPartSelect() {
  if (!state.selectedVehicleId) {
    els.partSelect.innerHTML = '<option value="">Select vehicle first</option>';
    els.partSelect.disabled = true;
    els.selectedVehicleText.textContent = "Select a vehicle to continue.";
    return;
  }

  const vehicle = getVehicleById(state.selectedVehicleId);
  const allParts = getPartsForVehicle(state.selectedVehicleId);
  const filtered = getFilteredParts();

  els.selectedVehicleText.textContent = `Selected: ${getVehicleLabel(vehicle)} | ${allParts.length} total parts`;

  els.partSelect.disabled = false;
  els.partSelect.innerHTML = '<option value="">Select a part</option>';

  filtered
    .slice()
    .sort((a, b) => `${a.zone}${a.category}${a.name}`.localeCompare(`${b.zone}${b.category}${b.name}`))
    .forEach((part) => {
      const option = document.createElement("option");
      option.value = part.id;
      option.textContent = `${part.name} (${part.category} - ${part.zone}) - $${part.price.toFixed(2)}`;
      els.partSelect.append(option);
    });

  if (!filtered.some((part) => part.id === state.selectedPartId)) {
    state.selectedPartId = "";
  }

  els.partSelect.value = state.selectedPartId;
}

function updateSelectedPartPanel() {
  const part = getSelectedPart();

  if (!part) {
    els.addSelectedPart.disabled = true;
    els.partDetails.textContent = "No part selected.";
    els.selectedPartTag.textContent = "Selected part will show here";

    if (state.zoneFilter === "all") {
      clearHighlight();
      els.highlightText.textContent = "Choose a part to highlight its location.";
    }

    return;
  }

  highlightZone(part.zone);
  els.addSelectedPart.disabled = false;
  els.selectedPartTag.textContent = part.name;
  els.partDetails.innerHTML = `<strong>${part.name}</strong><br />SKU: ${part.sku}<br />Category: ${part.category}<br />Zone: ${part.zone}<br />Price: $${part.price.toFixed(2)}<br />Stock: ${part.stock}`;
  els.highlightText.textContent = `Confirmed zone: ${part.zone}. This is the selected part for order.`;
}

function selectPart(partId) {
  state.selectedPartId = partId;
  els.partSelect.value = partId;
  updateSelectedPartPanel();
}

function renderSelectedVehicleParts() {
  if (!state.selectedVehicleId) {
    els.partsCount.textContent = "0 parts";
    els.vehicleParts.innerHTML = '<article class="part-card"><p class="muted">Select a vehicle to load parts catalog.</p></article>';
    return;
  }

  const allParts = getPartsForVehicle(state.selectedVehicleId);
  const parts = getFilteredParts();
  els.partsCount.textContent = `${parts.length} / ${allParts.length} parts`;

  if (!parts.length) {
    els.vehicleParts.innerHTML = '<article class="part-card"><p class="muted">No parts match this filter.</p></article>';
    return;
  }

  const groups = ZONE_ORDER.map((zone) => ({ zone, items: parts.filter((part) => part.zone === zone) })).filter((group) => group.items.length > 0);

  els.vehicleParts.innerHTML = groups
    .map(
      (group) => `<section class="parts-group">
        <h4 class="parts-group-title">${ZONES.find((item) => item.id === group.zone)?.label || group.zone}</h4>
        <div class="parts-group-grid">
          ${group.items
            .map(
              (part) => `<article class="part-card ${state.selectedPartId === part.id ? "selected" : ""}">
                <h4>${part.name}</h4>
                <div class="part-meta">
                  <span class="pill">${part.category}</span>
                  <span class="pill">${part.sku}</span>
                </div>
                <p class="stock-ok">Stock: ${part.stock}</p>
                <p><strong>$${part.price.toFixed(2)}</strong></p>
                <button class="secondary-btn part-select-btn" type="button" data-part-id="${part.id}">Select + Highlight</button>
              </article>`
            )
            .join("")}
        </div>
      </section>`
    )
    .join("");

  document.querySelectorAll("[data-part-id]").forEach((button) => {
    button.addEventListener("click", () => {
      selectPart(button.getAttribute("data-part-id") || "");
      renderSelectedVehicleParts();
    });
  });
}

function saveCart() {
  localStorage.setItem("abp-cart", JSON.stringify(state.cart));
}

function subtotal() {
  return state.cart.reduce((sum, item) => sum + item.qty * item.price, 0);
}

function totalWithShipping(total) {
  return els.shippingSpeed.value === "express" ? total * 1.15 : total;
}

function computeETA(distance, shipping) {
  if (!Number.isFinite(distance) || distance <= 0) return "Add valid distance";
  let eta = "5-7 business days";
  if (distance <= 20) eta = "2-4 hours";
  else if (distance <= 80) eta = "Same day";
  else if (distance <= 250) eta = "1-2 business days";
  else if (distance <= 700) eta = "3-4 business days";

  if (shipping === "express") {
    if (eta === "Same day") return "Priority same day";
    if (eta === "1-2 business days") return "1 business day";
    if (eta === "3-4 business days") return "2-3 business days";
    if (eta === "5-7 business days") return "4-5 business days";
  }

  return eta;
}

function updateEstimateBox() {
  const miles = Number(els.distanceMiles.value);
  els.etaText.textContent = computeETA(miles, els.shippingSpeed.value);
  els.totalText.textContent = `$${totalWithShipping(subtotal()).toFixed(2)}`;
}

async function postOrder(order, endpoint) {
  const response = await fetch(endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(order)
  });

  const contentType = response.headers.get("content-type") || "";
  if (!contentType.includes("application/json")) {
    throw new Error("Server returned non-JSON response.");
  }

  const payload = await response.json();
  if (!response.ok || !payload.ok) {
    throw new Error(payload.error || `Request failed at ${endpoint}`);
  }

  return payload;
}

async function submitOrderToBackend(order) {
  const endpoints = ["/api/orders"];

  const isLocalStatic = window.location.hostname === "127.0.0.1" || window.location.hostname === "localhost";
  if (isLocalStatic && window.location.port === "8080") {
    endpoints.push("http://127.0.0.1:8090/api/orders");
  }

  let lastError = null;
  for (const endpoint of endpoints) {
    try {
      return await postOrder(order, endpoint);
    } catch (error) {
      lastError = error;
    }
  }

  throw new Error(lastError?.message || "Unable to submit order.");
}

function renderCart() {
  if (!state.cart.length) {
    els.cartItems.innerHTML = '<p class="muted">No parts selected yet.</p>';
  } else {
    els.cartItems.innerHTML = state.cart
      .map(
        (item) => `<div class="cart-row">
          <div>
            <strong>${item.name}</strong>
            <p class="muted">Qty: ${item.qty} x $${item.price.toFixed(2)}</p>
          </div>
          <button class="secondary-btn" type="button" data-remove="${item.id}">Remove</button>
        </div>`
      )
      .join("");

    const summary = document.createElement("p");
    summary.innerHTML = `<strong>Subtotal: $${subtotal().toFixed(2)}</strong>`;
    els.cartItems.append(summary);

    document.querySelectorAll("[data-remove]").forEach((button) => {
      button.addEventListener("click", () => {
        const removeId = button.getAttribute("data-remove") || "";
        state.cart = state.cart.filter((item) => item.id !== removeId);
        saveCart();
        renderCart();
      });
    });
  }

  els.cartCount.textContent = String(state.cart.reduce((sum, item) => sum + item.qty, 0));
  updateEstimateBox();
}

function addSelectedPartToCart() {
  const part = getSelectedPart();
  if (!part) return;
  const qty = Number(els.partQty.value);

  if (!Number.isFinite(qty) || qty < 1) {
    alert("Enter a valid quantity.");
    return;
  }

  const existing = state.cart.find((item) => item.id === part.id);
  const existingQty = existing ? existing.qty : 0;
  if (existingQty + qty > part.stock) {
    alert(`Only ${part.stock} units available for ${part.name}.`);
    return;
  }

  if (existing) {
    existing.qty += qty;
  } else {
    state.cart.push({ id: part.id, name: `${part.name} (${part.vehicleLabel})`, qty, price: part.price });
  }

  saveCart();
  renderCart();
  els.cartPanel.classList.add("open");
  els.cartPanel.setAttribute("aria-hidden", "false");
}

function setupEvents() {
  els.yearFilter.addEventListener("change", () => {
    state.vehicleYear = els.yearFilter.value;
    renderVehicleSelection();
    renderPartSelect();
    renderSelectedVehicleParts();
    updateSelectedPartPanel();
  });

  els.makeFilter.addEventListener("change", () => {
    state.vehicleMake = els.makeFilter.value;
    renderVehicleSelection();
    renderPartSelect();
    renderSelectedVehicleParts();
    updateSelectedPartPanel();
  });

  els.typeFilter.addEventListener("change", () => {
    state.vehicleType = els.typeFilter.value;
    renderVehicleSelection();
    renderPartSelect();
    renderSelectedVehicleParts();
    updateSelectedPartPanel();
  });

  els.vehicleSearch.addEventListener("input", () => {
    state.vehicleSearch = els.vehicleSearch.value.trim();
    renderVehicleSelection();
    renderPartSelect();
    renderSelectedVehicleParts();
    updateSelectedPartPanel();
  });

  els.vehicleSelect.addEventListener("change", () => {
    state.selectedVehicleId = els.vehicleSelect.value;
    state.selectedPartId = "";
    state.zoneFilter = "all";
    state.partSearch = "";
    els.areaFilter.value = "all";
    els.partSearch.value = "";

    renderZoneFilters();
    renderPartSelect();
    renderSelectedVehicleParts();
    updateSelectedPartPanel();
  });

  els.partSearch.addEventListener("input", () => {
    state.partSearch = els.partSearch.value.trim();
    renderPartSelect();
    renderSelectedVehicleParts();
  });

  els.areaFilter.addEventListener("change", () => {
    state.zoneFilter = els.areaFilter.value;
    renderZoneFilters();
    renderPartSelect();
    renderSelectedVehicleParts();
    updateSelectedPartPanel();
    if (state.zoneFilter !== "all" && !state.selectedPartId) highlightZone(state.zoneFilter);
  });

  els.partSelect.addEventListener("change", () => {
    state.selectedPartId = els.partSelect.value;
    updateSelectedPartPanel();
    renderSelectedVehicleParts();
  });

  els.addSelectedPart.addEventListener("click", addSelectedPartToCart);

  els.cartToggle.addEventListener("click", () => {
    els.cartPanel.classList.add("open");
    els.cartPanel.setAttribute("aria-hidden", "false");
  });

  els.closeCart.addEventListener("click", () => {
    els.cartPanel.classList.remove("open");
    els.cartPanel.setAttribute("aria-hidden", "true");
  });

  els.distanceMiles.addEventListener("input", updateEstimateBox);
  els.shippingSpeed.addEventListener("change", updateEstimateBox);

  els.orderForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    if (!state.cart.length) {
      alert("Add at least one part before submitting the request.");
      return;
    }

    const data = new FormData(els.orderForm);
    const requestId = `REQ-${Date.now().toString().slice(-8)}`;
    const eta = computeETA(Number(data.get("distance")), String(data.get("shipping")));
    const total = totalWithShipping(subtotal());

    const order = {
      requestId,
      submittedAt: new Date().toISOString(),
      shipping: String(data.get("shipping") || "standard"),
      distance: Number(data.get("distance") || 0),
      eta,
      total: Number(total.toFixed(2)),
      customer: {
        name: String(data.get("name") || ""),
        phone: String(data.get("phone") || ""),
        email: String(data.get("email") || ""),
        address: String(data.get("address") || ""),
        city: String(data.get("city") || ""),
        state: String(data.get("state") || ""),
        zip: String(data.get("zip") || ""),
        notes: String(data.get("notes") || "")
      },
      items: state.cart.map((item) => ({ ...item }))
    };

    const submitButton = els.orderForm.querySelector('button[type="submit"]');
    if (submitButton) {
      submitButton.disabled = true;
      submitButton.textContent = "Submitting...";
    }

    try {
      const backend = await submitOrderToBackend(order);
      const emailMessage = backend.emailSent
        ? "Email notification sent to jamesreddy1505@gmail.com."
        : "Order received on backend. Configure SMTP to send email notifications.";

      els.confirmation.hidden = false;
      els.confirmation.innerHTML = `<h4>Request Submitted</h4>
        <p><strong>ID:</strong> ${requestId}</p>
        <p><strong>ETA:</strong> ${eta}</p>
        <p><strong>Estimated Total:</strong> $${total.toFixed(2)}</p>
        <p>${emailMessage}</p>
        <p>Thank you. Our parts specialist will call shortly to confirm fitment, payment, and delivery schedule.</p>`;

      state.cart = [];
      saveCart();
      renderCart();
      els.orderForm.reset();
      updateEstimateBox();
    } catch (error) {
      els.confirmation.hidden = false;
      els.confirmation.innerHTML = `<h4>Submission Failed</h4>
        <p>${error.message}</p>
        <p>For local testing, run <code>npm start</code> and use <code>http://127.0.0.1:8090</code>.</p>`;
    } finally {
      if (submitButton) {
        submitButton.disabled = false;
        submitButton.textContent = "Submit Order Request";
      }
    }
  });
}

function init() {
  renderVehicleFilterOptions();
  setupEvents();
  renderZoneFilters();
  renderVehicleSelection();
  renderPartSelect();
  renderSelectedVehicleParts();
  updateSelectedPartPanel();
  renderCart();
  updateEstimateBox();
}

init();
