

import type MovieCredentials from './MovieCredentials'


export interface Movie extends MovieCredentials {
id: string;
} 

//Создайте интерфейс, который наследует MovieCredentials и добавляет уникальный идентификатор: id: string