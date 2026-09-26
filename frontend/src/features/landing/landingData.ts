export interface Category {
  id: string;
  name: string;
  count: string;
  iconType: string;
  description: string;
  imageUrl?: string;
}

export interface FeaturedComponent {
  id: string;
  partNumber: string;
  name: string;
  category: string;
  manufacturer: string;
  description: string;
  rating: number;
  reviewsCount: number;
  priceRange: string;
  inStock: boolean;
  moq: number;
  imageUrl: string;
  tags: string[];
}

export interface ApplicationTemplate {
  id: string;
  title: string;
  componentsCount: number;
  imageUrl: string;
  description: string;
}

export interface HowItWorksStep {
  step: number;
  title: string;
  description: string;
  iconName: string;
}

export interface ValueProp {
  id: string;
  title: string;
  description: string;
  iconName: string;
  badge?: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export const POPULAR_CATEGORIES: Category[] = [
  {
    id: "microcontrollers",
    name: "Microcontrollers",
    count: "4,200+ parts",
    iconType: "cpu",
    description: "ARM, ESP32, AVR, STM32 & 8051 MCUs"
  },
  {
    id: "sensors",
    name: "Sensors",
    count: "3,150+ parts",
    iconType: "activity",
    description: "IMU, Gas, Temperature, Distance & Optical"
  },
  {
    id: "power-management",
    name: "Power Management",
    count: "2,800+ parts",
    iconType: "zap",
    description: "Buck/Boost Regulators, BMS, LDOs & Drivers"
  },
  {
    id: "connectors",
    name: "Connectors",
    count: "6,400+ parts",
    iconType: "plug",
    description: "JST, Header Pins, Terminal Blocks & USB"
  },
  {
    id: "motors-actuators",
    name: "Motors & Actuators",
    count: "1,900+ parts",
    iconType: "disc",
    description: "BLDC, Stepper Motors, Servos & Drivers"
  },
  {
    id: "passive-components",
    name: "Passive Components",
    count: "12,000+ parts",
    iconType: "sliders",
    description: "Resistors, Capacitors, Inductors & Crystals"
  },
  {
    id: "communication",
    name: "Communication",
    count: "1,500+ parts",
    iconType: "wifi",
    description: "LoRa, Zigbee, Bluetooth, GSM & RF Modules"
  },
  {
    id: "development-boards",
    name: "Development Boards",
    count: "950+ parts",
    iconType: "layout",
    description: "Arduino, Raspberry Pi, ESP Breakouts"
  },
  {
    id: "displays",
    name: "Displays",
    count: "1,100+ parts",
    iconType: "tv",
    description: "OLED, TFT LCD, E-Paper & 16x2 Displays"
  },
  {
    id: "enclosures",
    name: "Enclosures",
    count: "850+ parts",
    iconType: "box",
    description: "IP67 Weatherproof, DIN Rail & 3D Casing"
  }
];

export const FEATURED_COMPONENTS: FeaturedComponent[] = [
  {
    id: "esp32-wroom-32",
    partNumber: "ESP32-WROOM-32",
    name: "Wi-Fi + Bluetooth MCU Module",
    category: "Communication",
    manufacturer: "Espressif",
    description: "Dual-core 240MHz, 4MB Flash, integrated antenna",
    rating: 4.9,
    reviewsCount: 342,
    priceRange: "₹420 - ₹600",
    inStock: true,
    moq: 10,
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&q=80",
    tags: ["Popular", "Verified Supplier"]
  },
  {
    id: "stm32f103c8t6",
    partNumber: "STM32F103C8T6",
    name: "ARM Cortex-M3 MCU",
    category: "Microcontrollers",
    manufacturer: "STMicroelectronics",
    description: "32-bit MCU 72MHz, 64KB Flash, LQFP-48",
    rating: 4.8,
    reviewsCount: 215,
    priceRange: "₹110 - ₹160",
    inStock: true,
    moq: 10,
    imageUrl: "https://images.unsplash.com/photo-1608564697071-ddf911d81370?w=400&q=80",
    tags: ["Best Rated"]
  },
  {
    id: "2212-bldc-motor",
    partNumber: "2212 Brushless Motor",
    name: "1000KV BLDC Drone Motor",
    category: "Motors & Actuators",
    manufacturer: "Generic",
    description: "High torque brushless motor for quadcopters",
    rating: 4.7,
    reviewsCount: 168,
    priceRange: "₹850 - ₹1,200",
    inStock: true,
    moq: 4,
    imageUrl: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?w=400&q=80",
    tags: ["Popular"]
  },
  {
    id: "mpu6050",
    partNumber: "MPU6050",
    name: "6-Axis IMU Sensor",
    category: "Sensors",
    manufacturer: "TDK InvenSense",
    description: "3-axis Gyroscope + 3-axis Accelerometer I2C",
    rating: 4.8,
    reviewsCount: 194,
    priceRange: "₹45 - ₹75",
    inStock: true,
    moq: 5,
    imageUrl: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&q=80",
    tags: ["New Arrivals"]
  },
  {
    id: "oled-096-display",
    partNumber: "0.96\" OLED Display",
    name: "128x64 I2C Blue OLED Module",
    category: "Displays",
    manufacturer: "Generic",
    description: "Self-luminous low power graphic display module",
    rating: 4.6,
    reviewsCount: 178,
    priceRange: "₹120 - ₹180",
    inStock: true,
    moq: 10,
    imageUrl: "https://images.unsplash.com/photo-1563770660941-20978e870e26?w=400&q=80",
    tags: ["Popular"]
  },
  {
    id: "lm2596-buck",
    partNumber: "LM2596 Buck Converter",
    name: "DC-DC Step-Down Power Module",
    category: "Power Management",
    manufacturer: "Texas Instruments",
    description: "3A adjustable output step-down voltage regulator",
    rating: 4.9,
    reviewsCount: 310,
    priceRange: "₹60 - ₹90",
    inStock: true,
    moq: 10,
    imageUrl: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&q=80",
    tags: ["Verified Suppliers"]
  }
];

export const APPLICATION_TEMPLATES: ApplicationTemplate[] = [
  {
    id: "drones",
    title: "Drones & Quadcopters",
    componentsCount: 15,
    description: "Flight controllers, ESCs, BLDC motors, GPS, telemetry & LiPo batteries.",
    imageUrl: "https://images.unsplash.com/photo-1527977966376-1c8408f9f108?w=600&q=80"
  },
  {
    id: "smart-home",
    title: "Smart Home & Automation",
    componentsCount: 18,
    description: "Wi-Fi relays, touch switches, ambient sensors, IR blasters & power supplies.",
    imageUrl: "https://images.unsplash.com/photo-1558002038-1055907df827?w=600&q=80"
  },
  {
    id: "robotics",
    title: "Robotics & AGVs",
    componentsCount: 30,
    description: "Motor drivers, LiDAR, encoders, wheel assemblies, chassis & main controllers.",
    imageUrl: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&q=80"
  },
  {
    id: "industrial-automation",
    title: "Industrial Automation",
    componentsCount: 25,
    description: "PLC modules, RS485 transceivers, optocouplers, industrial sensors & relays.",
    imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80"
  },
  {
    id: "wearables",
    title: "Smart Wearables",
    componentsCount: 14,
    description: "Ultra-low power MCUs, PPG heart rate sensors, BLE chips & miniature LiPo.",
    imageUrl: "https://images.unsplash.com/photo-1510017803434-a899398421b3?w=600&q=80"
  },
  {
    id: "iot-communication",
    title: "IoT & Communication",
    componentsCount: 22,
    description: "LoRaWAN gateways, NB-IoT modems, external antennas & SIM sockets.",
    imageUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&q=80"
  }
];

export const HOW_IT_WORKS_STEPS: HowItWorksStep[] = [
  {
    step: 1,
    title: "Choose Application",
    description: "Start with your product or project to get a pre-configured list of required components.",
    iconName: "Box"
  },
  {
    step: 2,
    title: "Discover Components",
    description: "Explore compatible components with multiple Indian and global supplier offer options.",
    iconName: "Search"
  },
  {
    step: 3,
    title: "Compare Suppliers",
    description: "Compare suppliers side-by-side on price, MOQ, stock availability, lead time, and origin.",
    iconName: "Scale"
  },
  {
    step: 4,
    title: "Build BOM & Source",
    description: "Create a Bill of Materials, generate an optimized sourcing plan, and proceed to checkout.",
    iconName: "FileText"
  }
];

export const VALUE_PROPOSITIONS: ValueProp[] = [
  {
    id: "supplier-comparison",
    title: "Supplier Comparison",
    description: "Compare multiple verified suppliers on price, MOQ, stock levels, lead time, and origin.",
    iconName: "Scale"
  },
  {
    id: "bom-management",
    title: "BOM Management",
    description: "Create, import CSV, and manage your complete Bill of Materials with live cost calculation.",
    iconName: "FileText"
  },
  {
    id: "verified-suppliers",
    title: "Verified Suppliers",
    description: "Source with confidence from admin-verified Indian distributors, OEMs, and stockists.",
    iconName: "ShieldCheck",
    badge: "Verified"
  },
  {
    id: "india-focused",
    title: "India-Focused",
    description: "Optimized specifically for the Indian electronics design and manufacturing ecosystem.",
    iconName: "Flag"
  },
  {
    id: "transparent-procurement",
    title: "Transparent Procurement",
    description: "Make informed procurement decisions with upfront pricing and explicit lead time data.",
    iconName: "BarChart3"
  }
];

export const FAQS: FAQItem[] = [
  {
    id: "faq-1",
    question: "What is Electromart?",
    answer: "Electromart is an India-first multi-vendor B2B marketplace for electronic components. It connects hardware startups, engineers, and OEMs with verified component suppliers, allowing side-by-side supplier comparison, BOM creation, and streamlined procurement."
  },
  {
    id: "faq-2",
    question: "Is Electromart only for businesses?",
    answer: "While Electromart is optimized for B2B procurement, hardware startups, researchers, universities, and individual engineers can also create accounts to source components and build BOMs."
  },
  {
    id: "faq-3",
    question: "How do I create a BOM (Bill of Materials)?",
    answer: "You can start by selecting an Application Template (like Drone or Smart Home) or by creating a blank BOM from your account dashboard. You can add components directly from search results or compare supplier offers before adding."
  },
  {
    id: "faq-4",
    question: "Can I compare multiple suppliers for the same component?",
    answer: "Yes! Electromart models a 'Canonical Component' (e.g., STM32 MCU), allowing multiple suppliers to list their commercial offers under that exact component. You can compare unit price, MOQ, stock, lead time, and GST compliance in one click."
  },
  {
    id: "faq-5",
    question: "How are suppliers verified on Electromart?",
    answer: "All suppliers submit business registration, GST details, and verification documents during onboarding. Our admin team reviews and approves supplier profiles before their products are published on the marketplace."
  },
  {
    id: "faq-6",
    question: "Is there a minimum order quantity (MOQ)?",
    answer: "Each supplier sets their own MOQ per component offer. The shopping cart automatically validates supplier MOQ requirements and alerts you before checkout."
  }
];
