const useUserValidator = () => {

    const validate = (name: string) => {
        const invalidValues = ['_', ',', '.', '*', '#', '/', '-'];
        const validatorName = name.split('');
        const validFilter: string[] = validatorName.filter( value => value !== ' ')
        const errors: string[] = [];
        let isValid = true;
        let lengthNumber = 0;

        if (invalidValues.some(value => validFilter.includes(value))) {
            isValid = false;
            errors.push('This text should not have special characters (_ , . * # / -).');
        }

        validFilter.forEach(value => {
            if (!isNaN(Number(value))) lengthNumber++;
        });

        if (validFilter.length > 20) {
            isValid = false;
            errors.push('This text should not have more than 20 characters.');
        }

        if (lengthNumber === validFilter.length) {
            isValid = false;
            errors.push('This text should not have only numbers.');
        }

        if (validFilter.length < 5) {
            isValid = false;
            errors.length = 0;
            errors.push('This text must have at least 5 characters.');
        }

        if (lengthNumber > 3) {
            isValid = false;
            errors.push('This text should not have more than three numbers.');
        }

        return { isValid, errors };
    };

    return { validate };
};

export default useUserValidator;