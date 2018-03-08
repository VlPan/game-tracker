export class LsService {

    static selector = 'lsService';

    set(name:string, item: any): void {
        localStorage.setItem(name, JSON.stringify(item));
    }

    get(name:string): any {
        return JSON.parse(localStorage.getItem(name));
    }

    remove(name: string): void {
        localStorage.removeItem(name);
    }

    has(name: string): boolean {
        return !!this.get(name);
    }
}
