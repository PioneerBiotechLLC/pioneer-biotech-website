import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

const MEDICAL_DEVICES_ASSET_PATH = '/medical-devices'

export function asset(path: string) {
  return `${MEDICAL_DEVICES_ASSET_PATH}${path}`
}
