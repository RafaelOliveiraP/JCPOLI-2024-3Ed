<template>
    <div class="miniCourse">
      <div class="title">
        <i class="fas fa-graduation-cap"></i>
        <h3
          :title="tcc.title"
          v-bind:id="'true' ? tcc.title === 'HTML - a crash course - Cancelado' : ''"
        >
          {{ tcc.title }} <font color="red">{{tcc.warning}}</font>
        </h3>
      </div>
  
      <div class="info-h">
        <div>
          <h5 class="text-wrap nome-estudante" :title="tcc.estudantes">
            <strong>Estudante(s):</strong> {{ tcc.estudantes }}
          </h5>
          <h5 class="text-wrap nome-orientador" :title="tcc.orientador">
            <strong>Orientador(a):</strong> {{ tcc.titulacaoOrientador + " " + tcc.orientador }}
          </h5>
          <br>
          <h4><strong>Banca Examinadora:</strong></h4>
          <ul class="nomes-banca-examinadora">
            <li v-if="tcc.nomePrimeiroMembroBanca">{{tcc.titulacaoPrimeiroMembroBanca + " " + tcc.nomePrimeiroMembroBanca}}</li>
            <li v-if="tcc.nomeSegundoMembroBanca">{{tcc.titulacaoSegundoMembroBanca + " " + tcc.nomeSegundoMembroBanca}}</li>
            <li v-if="tcc.nomeTerceitoMembroBanca">{{tcc.titulacaoTerceitoMembroBanca + " " + tcc.nomeTerceitoMembroBanca}}</li>
          </ul>

          <h4><strong>Curso(s):</strong> {{ tcc.curso }}</h4>

          <!--<h6 :title="course.responsible">Responsável: {{course.responsible}}</h6> -->
        </div>
        
      </div>
  
      <!-- <div class="date-time-place">
        <i class="far fa-calendar-alt" style="margin-bottom: -100px;"></i>
        <i class="far fa-clock" style="margin-bottom: -100px;"></i>
        <i class="fas fa-map-marker-alt" style="margin-bottom: -100px;"></i>
        <div>{{ tcc.date }}</div>
        <div>{{ tcc.time }}</div>
        <div>
          <a v-if="tcc.link" :href="tcc.link" target="_blank">{{ tcc.place }}</a>
          <div v-if="tcc.link == null">{{ tcc.place }}</div>
        </div>
      </div> -->

      <div class="date-time-place">
        <div class="icon-container">
          <i class="far fa-calendar-alt"></i>
          <div>{{ tcc.date }}</div>
        </div>
        <div class="icon-container">
          <i class="far fa-clock"></i>
          <div>{{ tcc.time }}</div>
        </div>
        <div class="icon-container">
          <i class="fas fa-map-marker-alt"></i>
          <div v-if="tcc.link">
            <a :href="tcc.link" target="_blank">{{ tcc.place }}</a>
          </div>
          <div v-else>{{ tcc.place }}</div>
      </div>
  </div>


    </div>
  </template>
  
  <script src="./tccSection.ts" lang="ts"></script>
  
  <style src="./tccSection.css" scoped></style>
  