import { NextResponse } from 'next/server';
import { db } from '@/lib/firebase/firebase';
import { collection, addDoc, getDocs, query, limit, serverTimestamp } from 'firebase/firestore';

export async function GET(request: Request) {
  console.log('Firebase test API called');
  const results: any = {
    timestamp: new Date().toISOString(),
    tests: [],
    success: false,
  };

  try {
    // Test 1: Write a test document
    try {
      console.log('Test 1: Writing test document to Firestore');
      const testData = {
        test: true,
        message: 'Test document from API',
        created: serverTimestamp(),
      };
      
      const docRef = await addDoc(collection(db, 'test_collection'), testData);
      results.tests.push({
        name: 'Write test',
        success: true,
        documentId: docRef.id,
      });
      console.log('Test 1 success - Document written with ID:', docRef.id);
    } catch (writeError) {
      const errorMessage = writeError instanceof Error ? writeError.message : 'Unknown error';
      results.tests.push({
        name: 'Write test',
        success: false,
        error: errorMessage,
      });
      console.error('Test 1 failed - Write error:', writeError);
    }

    // Test 2: Read from Firestore
    try {
      console.log('Test 2: Reading from Firestore');
      const q = query(collection(db, 'test_collection'), limit(1));
      const querySnapshot = await getDocs(q);
      
      results.tests.push({
        name: 'Read test',
        success: true,
        documentsFound: querySnapshot.size,
        firstDocument: querySnapshot.size > 0 ? 
          Object.keys(querySnapshot.docs[0].data()).join(', ') : 'No documents',
      });
      console.log('Test 2 success - Read successful, documents found:', querySnapshot.size);
    } catch (readError) {
      const errorMessage = readError instanceof Error ? readError.message : 'Unknown error';
      results.tests.push({
        name: 'Read test',
        success: false,
        error: errorMessage,
      });
      console.error('Test 2 failed - Read error:', readError);
    }

    // Set overall success based on all tests passing
    results.success = results.tests.every((test: any) => test.success);

    return NextResponse.json(results);
  } catch (error) {
    console.error('Overall Firebase test API error:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json({
      timestamp: new Date().toISOString(),
      success: false,
      error: errorMessage,
    }, { status: 500 });
  }
} 