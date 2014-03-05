---
comments: true
date: 2012-11-12 00:20:28
layout: post
slug: que-es-la-programacion-funcional
title: Qué es la Programación Funcional?
wordpress_id: 481
categories:
- Destacados
- Programación Funcional
---

La programación funcional, o mejor dicho, los lenguajes de programación funcionales, son aquellos lenguajes donde las variables no tienen estado — no hay cambios en éstas a lo largo del tiempo — y son inmutables — no pueden cambiarse los valores a lo largo de la ejecución. Además los programas se estructuran componiendo _expresiones_ que se evalúan como funciones. Dentro de los lenguajes funcionales tenemos Lisp, Scheme, Clojure, Haskell, OCaml y Standard ML, entre otros. Estos lenguajes están diversidad de tipificación, donde se encuentran lenguajes dinámicos, estáticos y estáticos fuertes.


[![](http://www.programando.org/blog/wp-content/uploads/2012/11/976083_74231444-1024x682.jpg)](http://www.programando.org/blog/wp-content/uploads/2012/11/976083_74231444.jpg)


En los lenguajes funcionales las instrucciones cíclicas como **for**, **while** y **do-while** no existen. Todo se procesa usando recursividad y funciones de alto orden. Esto se debe a los fundamentos matemáticos de la mayoría de los lenguajes funcionales, principalmente con bases en el sistema formal diseñado por Alonzo Church para definir _cómputos_ y estudiar las _aplicaciones_ de las funciones llamado Cálculo Lambda. En este sistema formal se puede expresar recursividad en las funciones, y entre otras cosas interesantes, se pueden expresar combinadores — funciones sin variables libres — como el Combinador de Punto Fijo o Y-Combinator, que expresa recursividad sin hacer llamadas recursivas. En el Cálculo Lambda existen tres transformaciones esenciales, la conversión α, la reducción β y la conversión η. En la conversión α se sustituyen los nombres de las variables para dar mas claridad a la aplicación de las funciones, por ejemplo evitando duplicados en sus nombres. En la reducción β se traza el llamado de las funciones sustituyendo las funciones por sus expresiones resultantes. Finalmente en las conversiones η se busca las equivalencias de trazado de funciones sustituyéndolas por sus equivalentes. Estas _transformaciones_ también pueden ser aplicadas en los lenguajes funcionales — o en su mayoría — dando lugar lenguajes que cuentan con una gran _expresividad_ y _consistencia_.

Les pondré el clásico ejemplo del chiste geek del castigo _“Debo poner atención en clases”_. La respuesta geek expresada en PHP esta escrita a continuación. Donde PHP es un lenguaje dinámico, no necesita declarar variables y es un lenguaje orientado a objetos con raíces imperativas. Sus instrucciones son _paso a paso_, y no constituyen una única expresión reducible.

    
    <?php
    
        /* codigo PHP */
        for ($i = 0; $i < 500; $i++) {
            echo "Debo poner atencion en clases";
        }
    
     ?>


[![](http://www.programando.org/blog/wp-content/uploads/2012/11/haskell-logo.png)](http://www.programando.org/blog/wp-content/uploads/2012/11/haskell-logo.png)



Si usamos Haskell como ejemplo, que es un lenguaje funcional con tipificación estática fuerte, requiere que las variables sean declaradas con un tipo — la mayoría de las veces — y es muy expresivo, donde el siguiente ejemplo dice repetir la cadena, tomar 500 elementos y con esa lista ejecutar la función monádica putStrLn, que esta hecha para el Monad IO e imprime la el mensaje las 500 veces solicitada.







    
    module Main (main) where
    
    -- codigo Haskell
    
    main :: IO ()
    main = mapM_ putStrLn $ take 500 $ repeat "Debo poner atencion en clases"


En Lisp sería similar, pero Lisp es de tipificación dinámica y no necesita declarar variables, dando lugar a un programa muy simple de una sola linea. Donde también tenemos lenguajes como Clojure, que es un dialecto de Lisp y soporta construcciones muy similares a las del ejemplo en Lisp, dando lugar a programas expresivos y simples, pero que corren sobre la máquina virtual de Java o JVM.

    
    ;;; codigo Lisp
    
    (loop repeat 500 do (format t "Debo poner atencion en clases~%"))


Un ejemplo clásico para la conversión η en Haskell, es reducir las llamadas a funciones en su combinador de identidad. Por ejemplo se tiene la función _f(g(x))_, que en Cálculo Lambda se expresa como _λx.(λy.y)x_, se puede reducir a _g(x)_, que se expresa como _λy.y_ en Cálculo Lambda. Esto expresado en Haskell, se vería como el siguiente ejemplo, donde absN y absN' son funciones _equivalentes_ y absN' es la reducción η de absN.

    
    absN :: Num a => a -> a
    absN n = abs n
    
    absN' :: Num a => a -> a
    absN' = abs


Actualmente los lenguajes orientados a objetos más comunes están integrando características funcionales, como Java, que acaba de incluir _funciones anonimas_. Pero también están los lenguajes que a lo largo de su historia han sido multi-paradigma, como Python, e implementa características funcionales, procedurales y orientadas a objetos. El bien conocido algoritmo para verificar si un RUT es válido o no, se puede expresar funcionalmente en Python como esta escrito en el siguiente ejemplo.

    
    def val_rut(rut):
        """
        Valida un string con un RUT con el guion incluido, retornando
        cero si es valido.
    
        Ejemplo: print(val_rut("22222222-2"))
        """
        return cmp(rut[-1],
                   str((range(10) + ['K'])[
                       (11 - sum(map(lambda x: (int(x[0]) * x[1]),
                                     zip(reversed(rut[:-2]),
                                         (2 * range(2, 8))))) % 11)]))


Como se aprecia en el ejemplo, la validación se realiza utilizando _expresiones_ o _llamadas a funciones_, sin uso de variables con estado y mutabilidad, donde cada llamada a una función se puede reducir a un valor determinado, y como resultado final se tiene un valor cero o distinto de cero que indica si el RUT es válido. Este mismo _algoritmo funcional_, se puede expresar en Haskell con llamadas muy similares, debido a que los nombres de las funciones y funciones de alto orden son bastante comunes entre los lenguajes funcionales.

    
    valRut :: String -> Bool
    valRut s = (((['0'..'9'] ++ ['K'])
                 !! (11 - sum(zipWith (*)
                              (fmap digitToInt $ drop 2 $ reverse s)
                              (take 10 $ cycle [2..7])) `mod` 11)) == (last s))


De estos dos ejemplos, se puede decir que son funciones _puras_, principalmente debido a que no tienen variables libres y son una única expresión sin estado y no mutable a lo largo de la ejecución. El problema de la _pureza_ es conceptualmente algo que se idealiza en la programación funcional, siendo abordado de diferentes formas por diferentes lenguajes. El objetivo es mantener las funciones y rutinas puras. En Haskell, con su abstracción más clásica conocida con el nombre de Mónada, permite entregar _pureza_ a expresiones que parecen no ser puras, y en términos muy sencillos el Mónada reúne una identidad y una composición de funciones del tipo _f(g(x))_, todo a través de un tipo de dato que permite componer funciones sin abandonar ese tipo de dato y darle un aspecto procedural.

Personalmente creo que es importante aprender algo de programación funcional porque de alguna forma cambia la perspectiva que uno tiene de los programas. Uno generalmente esta acostumbrado a pensar en los programas como si fuesen una lista ordenada de instrucciones a seguir, cuando generalmente esa misma lista ordenada de instrucciones a seguir puede ser expresada como una función y más aun, como una función pura.
