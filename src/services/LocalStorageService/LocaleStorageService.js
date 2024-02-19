import DataService from './DataService';

class LocalStorageService extends DataService {
  getData(key) {
    return JSON.parse(localStorage.getItem(key));
  }

  saveData(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
  }

  deleteData(key) {
    localStorage.removeItem(key);
  }
}

export default LocalStorageService;
