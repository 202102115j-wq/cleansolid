(() => {

    // Resolver sin la triple condicional dentro del if
    // includes? arrays?
    function checkRedFruit(fruitName: string): boolean {

        const redFruitList = ['manzana', 'cereza', 'ciruela'];

        return redFruitList.includes(fruitName);
    }

    // Simplificar esta función
    // switch? Object literal? validar posibles colores
    function findFruitsByColor(colorName: string): string[] {

        const fruitColorMap: { [key: string]: string[] } = {
            red: ['manzana', 'fresa'],
            yellow: ['piña', 'banana'],
            purple: ['moras', 'uvas']
        };

        if (fruitColorMap[colorName]) {
            return fruitColorMap[colorName];
        }

        throw Error('the color must be: red, yellow, purple');
    }

    // Simplificar esta función
    let firstProcessStatus = true;
    let secondProcessStatus = true;
    let thirdProcessStatus = true;
    let fourthProcessStatus = true;

    function validateProcessSteps() {

        if (!firstProcessStatus) return 'First step broken.';
        if (!secondProcessStatus) return 'Second step broken.';
        if (!thirdProcessStatus) return 'Third step broken.';
        if (!fourthProcessStatus) return 'Fourth step broken.';

        return 'Working properly!';
    }


    // isRedFruit
    console.log({ isRedFruit: checkRedFruit('cereza'), fruit: 'cereza' }); // true
    console.log({ isRedFruit: checkRedFruit('piña'), fruit: 'piña' }); // true

    //getFruitsByColor
    console.log({ redFruits: findFruitsByColor('red') }); // ['manzana', 'fresa']
    console.log({ yellowFruits: findFruitsByColor('yellow') }); // ['piña', 'banana']
    console.log({ purpleFruits: findFruitsByColor('purple') }); // ['moras', 'uvas']
    // console.log({ pinkFruits: getFruitsByColor('pink') }); // Error: the color must be: red, yellow, purple

    // workingSteps
    console.log({ workingSteps: validateProcessSteps() }); // Cambiar los valores de la línea 31 y esperar los resultados

})();