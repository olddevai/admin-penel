import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc } from 'firebase/firestore';
import { db } from '../firebase';
import { Product } from '@/types';

export async function getProducts() {
  const querySnapshot = await getDocs(collection(db, 'products'));
  return querySnapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  })) as Product[];
}

export async function addProduct(product: Omit<Product, 'id'>) {
  const docRef = await addDoc(collection(db, 'products'), product);
  return docRef.id;
}

export async function updateProduct(id: string, product: Partial<Product>) {
  const docRef = doc(db, 'products', id);
  await updateDoc(docRef, product);
}

export async function deleteProduct(id: string) {
  const docRef = doc(db, 'products', id);
  await deleteDoc(docRef);
}