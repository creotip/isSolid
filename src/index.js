/* eslint-disable no-prototype-builtins */
import isNil from 'lodash/isNil'
import isPlainObject from 'lodash/isPlainObject'
import get from 'lodash/get'

// This util function checks if the given value is undefined, null or empty string/array/object
export function isSolid(val) {
	if (isNil(val)) {
		// value is null or undefined
		return false
	} else {
		// is not null or undefined
  
		if (val.hasOwnProperty('length')) {
			if (val.length > 0) {
				// is STRING or ARRAY
				return true
			} else {
				// is empty STRING or ARRAY
				return false
			}
		} else if (isPlainObject(val)) {
			if (Object.keys(val).length > 0) {
				// is OBJECT
				return true
			} else {
				// is empty OBJECT
				return false
			}
		} else {
			// is NUMBER
			return true
		}
	}
}





export default isSolid