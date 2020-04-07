import typecast from '../string/typecast';
import getQuery from './getQuery';

    /**
     * Get query parameter value.
     */
    function getParam(url, param, shouldTypecast){
        var regexp = new RegExp('(\\?|&)'+ param + '=([^&]*)'), //matches `?param=value` or `&param=value`, value = $2
            result = regexp.exec( getQuery(url) ),
            val = (result && result[2])? result[2] : null;
        return shouldTypecast === false? val : typecast(val);
    }

    export default getParam;

