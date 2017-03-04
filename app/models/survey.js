import Ember from 'ember';
import DS from 'ember-data';

const Survey = DS.Model.extend({
  question:        DS.attr('string'),
  answers:         DS.attr(),
  userAnswer:      DS.attr('number'),
  editorialAnswer: DS.attr('number'),
  fromSecond:      DS.attr('number'),
  toSecond:        DS.attr('number'),
  active:          DS.attr('boolean', {defaultValue: false}),
  video:           DS.belongsTo('video'),
  check:           DS.attr('string'),

  answered:  Ember.computed.notEmpty('userAnswer'),
  isSuccess: Ember.computed('userAnswer', 'editorialAnswer', function() {
    return this.get('userAnswer') === this.get('editorialAnswer');
  })
});

Survey.reopenClass({
  FIXTURES: [
    {
      id: 1,
      question: '“España es el país que más empleo crea”',
      answers: [
        'Verdadero',
        'Falso'
      ],
      editorialAnswer: 1,
//      userAnswer: 1,
      fromSecond: 1,
      toSecond: 5,
      video: 1,
      check: 'Falso. España es el país número 14 de Europa en tasa de creación de empleo, según el último informe de Eurostat. Estonia, Irlanda, Lituania, Chipre, Malta, Luxemburgo, Suecia, Eslovaquia, Eslovenia, Portugal, Reino Unido, Hungría e Italia nos supera.'
    },
    {
      id: 2,
      question: '“España es fiable y eso se traduce en los intereses que paga nuestra deuda”',
      answers: [
        'Verdadero',
        'Falso'
      ],
      editorialAnswer: 1,
//      userAnswer: 1,
      fromSecond: 6,
      toSecond: 13,
      video: 1,
      check: 'Falso. La prima de riesgo de España –y del resto de los países europeos– se ha reducido enormemente gracias a la compra de deuda por parte del Banco Central Europeo. Esto provocó la bajada de los intereses de la deuda pública, pero no solo de España, sino de todos.'
    },
    {
      id: 3,
      question: '“En España desde 1977 siempre ha gobernado la fuerza política que ha contado con más apoyos populares”',
      answers: [
        'Verdadero',
        'Falso'
      ],
      editorialAnswer: 1,
//      userAnswer: 1,
      fromSecond: 14,
      toSecond: 24,
      video: 1,
      check: 'Falso. Hay precedentes en gobiernos autonómicos y municipales de lo contrario. El propio PP ha participado en numerosos gobiernos sin ser el partido más votado. Lo hicieron en Euskadi, aliados con el PSE contra el PNV; en Madrid, apoyados en el CDS contra el PSOE, y en Valencia.'
    },
    {
      id: 4,
      question: '“La diferencia del PP con la segunda fuerza política supera en votos los dos millones y medio”',
      answers: [
        'Verdadero',
        'Falso'
      ],
      editorialAnswer: 0,
//      userAnswer: 1,
      fromSecond: 30,
      toSecond: 37,
      video: 1,
      check: 'Verdadero. Las matemáticas le dan en este caso la razón al candidato a La Moncloa. El PP ganó las pasadas elecciones del 26-J con casi 8 millones de sufragios, por los cerca de 5,5 millones del PSOE, la segunda fuerza política más votada.'
    },
    {
      id: 5,
      question: '“La repetición de elecciones no es lo que los españoles desean ni lo que les beneficia"',
      answers: [
        'Verdadero',
        'Falso'
      ],
      editorialAnswer: 0,
//      userAnswer: 0,
      fromSecond: 39,
      toSecond: 47,
      video: 1,
      check: 'Verdadero. Una encuesta realizada por Metroscopia en septiembre reveló que siete de cada diez españoles no querían que se celebrasen unas terceras elecciones.'
    },
    {
      id: 6,
      question: '“Más de 14 millones de personas reciben cada final de mes algún tipo de prestación pública”',
      answers: [
        'Verdadero',
        'Falso'
      ],
      editorialAnswer: 0,
//      userAnswer: 0,
      fromSecond: 48,
      toSecond: 61,
      video: 1,
      check: 'Verdadero. En España hay 14,16 millones de personas que reciben alguna prestación pública. De esta cifra, 13,52 millones representan a ciudadanos con ayudas procedentes de la Seguridad Social, mientras que el resto (casi 640.000 personas) se beneficia de una renta mínima de inserción procedente de las comunidades autónomas.'
    },
    {
      id: 7,
      question: '“No es de extrañar que el 63% de nuestro gasto público total sea gasto social”',
      answers: [
        'Verdadero',
        'Falso'
      ],
      editorialAnswer: 0,
//      userAnswer: 0,
      fromSecond: 62,
      toSecond: 69,
      video: 1,
      check: 'Verdadero. El conjunto de las administraciones se gastan en Gasto Social, Sanidad y Educación seis de cada diez euros (el 62,4%), según las últimas previsiones disponibles disponibles en la Intervención General del Estado.'
    },
    {
      id: 8,
      question: '“Las cuentas del Estado (PGE) determinan el destino del 43% del Producto Interior Bruto"',
      answers: [
        'Verdadero',
        'Falso'
      ],
      editorialAnswer: 1,
//      userAnswer: 0,
      fromSecond: 71,
      toSecond: 90,
      video: 1,
      check: 'Falso. El porcentaje que los Presupuestos Generales del Estado 2016 (436.370 millones de euros) representan sobre el PIB español es del 40,57%, ligeramente por debajo del 43% manifestado por Rajoy en el estrado. Si interpretamos “las cuentas del Estado” exclusivamente como los gastos consolidados del Estado, estos serían 274.731 millones de euros, lo que representa el 25,54% de la riqueza español.'
    }
  ]
});

export default Survey;
