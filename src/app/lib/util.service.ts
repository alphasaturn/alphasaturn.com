import { Injectable } from '@angular/core';

@Injectable()
export class UtilService {
    constructor() { }

    parseSource(source: string): string {
        return source.split('-')[0].toUpperCase();
    }
}