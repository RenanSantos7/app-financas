export default function formatObject(arr: any[]) {
	return Object.fromEntries(arr.map(item => Object.values(item)));
}
