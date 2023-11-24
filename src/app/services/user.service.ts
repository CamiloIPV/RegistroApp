import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private auth:AngularFireAuth) { }
  // Registrar un nuevo usuario
  register({ email, password }: any) {
    return this.auth.createUserWithEmailAndPassword(email, password);
  }

  // Iniciar sesión
  login({ email, password }: any) {
    return this.auth.signInWithEmailAndPassword(email, password);
  }

  // Cerrar sesión
  logout() {
    return this.auth.signOut();
  }
}
  
