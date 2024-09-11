/**
 * Verifica se o objeto é um objeto não vazio
 */
export default function isNonEmptyObj(obj: Object) {
	if (obj && typeof obj === 'object') {
		return Object.values(obj).some(val => val !== null && val !== undefined);
	}
	return false;
}

