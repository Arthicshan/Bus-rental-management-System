import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

import Bus from './models/bus.js';

const sampleBuses = [
  // --- Luxury (6 Buses) ---
  {
    busType: 'Luxury',
    brand: 'Volvo',
    modelName: 'B11R',
    engineNumber: 'ENG-VOL-001',
    capacity: 45,
    numberPlate: 'NB-1234',
    pricePerDay: 35000,
    isActive: true,
    status: 'Available'
  },
  {
    busType: 'Luxury',
    brand: 'Scania',
    modelName: 'K410',
    engineNumber: 'ENG-SCA-002',
    capacity: 50,
    numberPlate: 'WP-5678',
    pricePerDay: 40000,
    isActive: true,
    status: 'Available'
  },
  {
    busType: 'Luxury',
    brand: 'Mercedes-Benz',
    modelName: 'Tourrider',
    engineNumber: 'ENG-BEN-011',
    capacity: 45,
    numberPlate: 'NP-1111',
    pricePerDay: 45000,
    isActive: true,
    status: 'Available'
  },
  {
    busType: 'Luxury',
    brand: 'Volvo',
    modelName: '9700',
    engineNumber: 'ENG-VOL-012',
    capacity: 48,
    numberPlate: 'NP-1222',
    pricePerDay: 38000,
    isActive: true,
    status: 'Available'
  },
  {
    busType: 'Luxury',
    brand: 'Scania',
    modelName: 'Touring',
    engineNumber: 'ENG-SCA-013',
    capacity: 49,
    numberPlate: 'NP-1333',
    pricePerDay: 42000,
    isActive: true,
    status: 'Available'
  },
  {
    busType: 'Luxury',
    brand: 'Yutong',
    modelName: 'T13',
    engineNumber: 'ENG-YUT-014',
    capacity: 51,
    numberPlate: 'NP-1444',
    pricePerDay: 36000,
    isActive: true,
    status: 'Available'
  },

  // --- Deluxe (6 Buses) ---
  {
    busType: 'Deluxe',
    brand: 'Ashok Leyland',
    modelName: 'Viking',
    engineNumber: 'ENG-ASH-003',
    capacity: 52,
    numberPlate: 'CP-9012',
    pricePerDay: 25000,
    isActive: true,
    status: 'Available'
  },
  {
    busType: 'Deluxe',
    brand: 'Tata',
    modelName: 'Starbus Ultra',
    engineNumber: 'ENG-TAT-004',
    capacity: 48,
    numberPlate: 'SP-3456',
    pricePerDay: 22000,
    isActive: true,
    status: 'Available'
  },
  {
    busType: 'Deluxe',
    brand: 'Isuzu',
    modelName: 'LT134',
    engineNumber: 'ENG-ISU-015',
    capacity: 45,
    numberPlate: 'NP-1555',
    pricePerDay: 26000,
    isActive: true,
    status: 'Available'
  },
  {
    busType: 'Deluxe',
    brand: 'Mitsubishi',
    modelName: 'Fuso',
    engineNumber: 'ENG-MIT-016',
    capacity: 48,
    numberPlate: 'NP-1666',
    pricePerDay: 24000,
    isActive: true,
    status: 'Available'
  },
  {
    busType: 'Deluxe',
    brand: 'King Long',
    modelName: 'XMQ6127',
    engineNumber: 'ENG-KIN-017',
    capacity: 50,
    numberPlate: 'NP-1777',
    pricePerDay: 27000,
    isActive: true,
    status: 'Available'
  },
  {
    busType: 'Deluxe',
    brand: 'Golden Dragon',
    modelName: 'XML6127',
    engineNumber: 'ENG-GOL-018',
    capacity: 49,
    numberPlate: 'NP-1888',
    pricePerDay: 23000,
    isActive: true,
    status: 'Available'
  },

  // --- Standard (6 Buses) ---
  {
    busType: 'Standard',
    brand: 'Lanka Ashok Leyland',
    modelName: 'Lynx',
    engineNumber: 'ENG-LAL-005',
    capacity: 54,
    numberPlate: 'EP-7890',
    pricePerDay: 15000,
    isActive: true,
    status: 'Available'
  },
  {
    busType: 'Standard',
    brand: 'Tata',
    modelName: 'LP 913',
    engineNumber: 'ENG-TAT-006',
    capacity: 50,
    numberPlate: 'NW-2345',
    pricePerDay: 12000,
    isActive: true,
    status: 'Available'
  },
  {
    busType: 'Standard',
    brand: 'Ashok Leyland',
    modelName: 'Falcon',
    engineNumber: 'ENG-ASH-019',
    capacity: 54,
    numberPlate: 'NP-1999',
    pricePerDay: 14000,
    isActive: true,
    status: 'Available'
  },
  {
    busType: 'Standard',
    brand: 'Tata',
    modelName: 'LPO 1618',
    engineNumber: 'ENG-TAT-020',
    capacity: 56,
    numberPlate: 'NP-2000',
    pricePerDay: 13000,
    isActive: true,
    status: 'Available'
  },
  {
    busType: 'Standard',
    brand: 'Eicher',
    modelName: 'Pro 2049',
    engineNumber: 'ENG-EIC-021',
    capacity: 50,
    numberPlate: 'NP-2111',
    pricePerDay: 11000,
    isActive: true,
    status: 'Available'
  },
  {
    busType: 'Standard',
    brand: 'Mahindra',
    modelName: 'Cruzio',
    engineNumber: 'ENG-MAH-022',
    capacity: 48,
    numberPlate: 'NP-2222',
    pricePerDay: 12500,
    isActive: true,
    status: 'Available'
  },

  // --- Mini (6 Buses) ---
  {
    busType: 'Mini',
    brand: 'Toyota',
    modelName: 'Coaster',
    engineNumber: 'ENG-TOY-007',
    capacity: 28,
    numberPlate: 'WP-6789',
    pricePerDay: 18000,
    isActive: true,
    status: 'Available'
  },
  {
    busType: 'Mini',
    brand: 'Nissan',
    modelName: 'Civilian',
    engineNumber: 'ENG-NIS-008',
    capacity: 25,
    numberPlate: 'SG-1357',
    pricePerDay: 16000,
    isActive: true,
    status: 'Available'
  },
  {
    busType: 'Mini',
    brand: 'Isuzu',
    modelName: 'Journey',
    engineNumber: 'ENG-ISU-023',
    capacity: 29,
    numberPlate: 'NP-2333',
    pricePerDay: 17000,
    isActive: true,
    status: 'Available'
  },
  {
    busType: 'Mini',
    brand: 'Mitsubishi',
    modelName: 'Rosa',
    engineNumber: 'ENG-MIT-024',
    capacity: 26,
    numberPlate: 'NP-2444',
    pricePerDay: 16500,
    isActive: true,
    status: 'Available'
  },
  {
    busType: 'Mini',
    brand: 'Hyundai',
    modelName: 'County',
    engineNumber: 'ENG-HYU-025',
    capacity: 28,
    numberPlate: 'NP-2555',
    pricePerDay: 15500,
    isActive: true,
    status: 'Available'
  },
  {
    busType: 'Mini',
    brand: 'JAC',
    modelName: 'Sunray',
    engineNumber: 'ENG-JAC-026',
    capacity: 22,
    numberPlate: 'NP-2666',
    pricePerDay: 14500,
    isActive: true,
    status: 'Available'
  },

  // --- Double Decker (6 Buses) ---
  {
    busType: 'Double Decker',
    brand: 'Alexander Dennis',
    modelName: 'Enviro 400',
    engineNumber: 'ENG-ADE-009',
    capacity: 80,
    numberPlate: 'WP-2468',
    pricePerDay: 55000,
    isActive: true,
    status: 'Available'
  },
  {
    busType: 'Double Decker',
    brand: 'Volvo',
    modelName: 'B5TL',
    engineNumber: 'ENG-VOL-010',
    capacity: 75,
    numberPlate: 'NB-8024',
    pricePerDay: 50000,
    isActive: true,
    status: 'Available'
  },
  {
    busType: 'Double Decker',
    brand: 'Wrightbus',
    modelName: 'StreetDeck',
    engineNumber: 'ENG-WRI-027',
    capacity: 82,
    numberPlate: 'NP-2777',
    pricePerDay: 53000,
    isActive: true,
    status: 'Available'
  },
  {
    busType: 'Double Decker',
    brand: 'MAN',
    modelName: 'Lion\'s City DD',
    engineNumber: 'ENG-MAN-028',
    capacity: 78,
    numberPlate: 'NP-2888',
    pricePerDay: 52000,
    isActive: true,
    status: 'Available'
  },
  {
    busType: 'Double Decker',
    brand: 'Scania',
    modelName: 'OmniCity DD',
    engineNumber: 'ENG-SCA-029',
    capacity: 85,
    numberPlate: 'NP-2999',
    pricePerDay: 56000,
    isActive: true,
    status: 'Available'
  },
  {
    busType: 'Double Decker',
    brand: 'Neoplan',
    modelName: 'Skyliner',
    engineNumber: 'ENG-NEO-030',
    capacity: 90,
    numberPlate: 'NP-3000',
    pricePerDay: 60000,
    isActive: true,
    status: 'Available'
  }
];

async function seedBuses() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB');

    // Check existing buses
    const existingCount = await Bus.countDocuments();
    console.log(`Existing buses in database: ${existingCount}`);

    // Insert sample buses
    let inserted = 0;
    for (const busData of sampleBuses) {
      try {
        const bus = new Bus(busData);
        await bus.save();
        console.log(`✅ Added: ${busData.brand} ${busData.modelName} (${busData.busType}) - ${busData.numberPlate}`);
        inserted++;
      } catch (err) {
        if (err.code === 11000) {
          console.log(`⚠️  Skipped (already exists): ${busData.brand} ${busData.modelName} - ${busData.numberPlate}`);
        } else {
          console.error(`❌ Error adding ${busData.numberPlate}:`, err.message);
        }
      }
    }

    console.log(`\nDone! Inserted ${inserted} new buses.`);
    const totalCount = await Bus.countDocuments();
    console.log(`Total buses in database: ${totalCount}`);

    await mongoose.disconnect();
    console.log('Disconnected from MongoDB');
  } catch (error) {
    console.error('Error:', error.message);
    process.exit(1);
  }
}

seedBuses();
