/**
 * Created by Mos on 2017/1/9.
 */
declare namespace testLib{

    interface sayHello{
        somebodySay(str:string):void;
    }

    interface Human{
        name:string;
        age :number;
    }

    export function somebodySay(str:string):void;
}

export =testLib;