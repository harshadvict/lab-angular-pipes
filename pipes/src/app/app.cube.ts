import{Pipe,PipeTransform} from '@angular/core';

@Pipe ({
    name: 'cube'
})

export class cubePipe implements PipeTransform  {
    transform(value: number) :number {
        return Math.cbrt(value);
    }
   
}