import { collection, getDocs, addDoc, updateDoc, doc, query, where } from 'firebase/firestore';
import { db } from '../firebase';
import { Order } from '@/types';

export async function getOrders(userId?: string) {
  const ordersRef = collection(db, 'orders');
  const q = userId 
    ? query(ordersRef, where('userId', '==', userId))
    : ordersRef;
    
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  })) as Order[];
}

export async function createOrder(order: Omit<Order, 'id'>) {
  const docRef = await addDoc(collection(db, 'orders'), order);
  return docRef.id;
}

export async function updateOrderStatus(id: string, status: Order['status']) {
  const docRef = doc(db, 'orders', id);
  await updateDoc(docRef, { status });
}