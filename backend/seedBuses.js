import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

import Bus from './models/bus.js';

const sampleBuses = [
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
