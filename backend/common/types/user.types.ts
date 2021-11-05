// tipo de dato EstadoDelUsuario
type EstadoDelUsuario = 'ACTIVO' | 'INACTIVO' | 'SUSPENDIDO' | 0;

enum UserStatus {
    ACTIVE = 'ACTIVO',
    INACTIVE = 'INACTIVO',
    SUSPENDED = 'SUSPENDIDO',
    DEFAULT = 0
}
const usuarioEstado: EstadoDelUsuario = UserStatus.ACTIVE;


interface ELPEPE {
    name: string
}
interface ELPEPE {
    lastName: string;
}

const erpepe: ELPEPE = {
    name: 'PEPE',
    lastName: ""
};