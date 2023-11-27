import { initializeApp } from 'firebase/app'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'

import { firebaseConfig } from '@/network/firebase'
import { parseFirebaseError } from '@/utils/functions'

initializeApp(firebaseConfig)

/** firebase email/password login */
export const loginUser = async (email: string, password: string) => {
  try {
    const auth = getAuth()
    const { user } = await signInWithEmailAndPassword(auth, email, password)

    // on success
    return {
      data: user,
      status: 'success',
      message: 'logged in',
    }
  } catch (error: any) {
    const errorCode = error.code

    // on error
    return {
      data: error,
      status: 'error',
      message: parseFirebaseError(errorCode),
    }
  }
}

export const x = () => {}
