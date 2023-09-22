import firestore from '@react-native-firebase/firestore';

const FirebaseApi = {
  GetAll: async <T>(collectionName: string): Promise<T[]> => {
    try {
      const snapshot = await firestore().collection(collectionName).get();
      const data: T[] = snapshot.docs.map(doc => doc.data() as T);
      return data;
    } catch (error) {
      throw error;
    }
  },

  GetOne: async <T>(collectionName: string, documentId: string): Promise<T> => {
    try {
      const doc = await firestore()
        .collection(collectionName)
        .doc(documentId)
        .get();
      if (doc.exists) {
        return doc.data() as T;
      } else {
        throw new Error('Document not found');
      }
    } catch (error) {
      throw error;
    }
  },
};

export default FirebaseApi;
