import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding02property',
  templateUrl: './binding02property.component.html',
  styleUrls: ['./binding02property.component.css'],
  standalone: true
})
export class Binding02PropertyComponent implements OnInit {


  constructor() { }

  PhotoImg: string = 'assets/photo1715505563.jpeg';
  width: number = 180;
  height: number = 400;

  FirstText: string = 'О СЕБЕ'; 
  AboutMe: string = 'Студент Компьютерной Академии Шаг. \nЕсть опыт работы в различных компаниях на должности fullstak-разработчика';
  ColorText: string = '#aaa7a5';  

  AwardsAndAchievements: string = 'НАГРАДЫ И ДОСТИЖЕНИЯ';
  Awards01: string = '- Лауреат нобелевской премии';
  Awards02: string = '- Оcноватль компании SHEVO';
  Awards03: string = '- Один из создателей КК SPACE';

  ContactMe: string = 'СВЯЖИТЕСЬ СО МНОЙ';
  Phone: string = '+(380)967-814-290';  
  Email: string = 'alecsand.unit@gmail.com'
  City: string = 'Одесса ул. Типличная 7а`';

  Experience: string = 'ОПЫТ РАБОТЫ';
  Education: string = 'ОБРОЗОВАНИЕ';
  BackIndorm: string = 'backend devoluper | 2024-2027';
  GoogleWork: string = 'Полтора года в компании Google';
  TeslaWork: string = '2 года в компании Tesla';
  
  SchoolEducation: string = '- полное среднее оброзование в школе №85 Одесса';
  UniversityEducation: string = '- бакалавр в частном университете "Шаг"';

  Skills: string = 'НАВЫКИ';
  SkillsText: string = 'Владею языками программиррования C++, Java, Python, Js, Kotlin, C#, TypeScript. А так же фреймворком Angular и различными библиотеками в том числе React. Так же владею английским языком на уровне C1';
  
  color: string = 'hsl(27, 23%, 92%)';
  ColorSummer(colr: string){
   this.color = colr;
  }
  
  ngOnInit() {
  }

}
