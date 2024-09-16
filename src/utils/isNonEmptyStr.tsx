export default function inNonEmptyStr(value: string) {
	return typeof value === 'string' && value.trim() !== ''
}