import { Injectable } from '@angular/core';
import { Preferences } from '@capacitor/preferences';

const llave='Valor@226530.';



@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  async getItem(key: string): Promise<string | null> {
    try {
      const obj = await Preferences.get({ key });
      return obj.value;
    } catch (error) {
      console.error(`Error obteniendo el item con la llave ${key}:`, error);
      return null;
    }
  }
 
  private async setItem(key:string,valor:string){ 
    await Preferences.set({key:key,value:valor});
  }
 
  private async removeItem(key:string){
    await Preferences.remove({key:key});
  }

  


}
