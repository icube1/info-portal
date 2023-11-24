import NewsPageView from "./NewsPageView";
import {ArticaleType, ArticleAttachmentType} from "@/src/Symbols";

export default function NewsPage() {
  return <NewsPageView
    newsList={[
      {
        id: 0,
        title: "Заголовок новости",
        description: "Описание новости",
        date: new Date("2022-01-01"),
        text: "Кстати, элементы политического процесса ограничены исключительно образом мышления. А ещё активно развивающиеся страны третьего мира, инициированные исключительно синтетически, функционально разнесены на независимые элементы. А ещё ключевые особенности структуры проекта будут описаны максимально подробно.\n" +
          "\n" +
          "И нет сомнений, что непосредственные участники технического прогресса призывают нас к новым свершениям, которые, в свою очередь, должны быть ассоциативно распределены по отраслям. Как принято считать, явные признаки победы институционализации неоднозначны и будут представлены в исключительно положительном свете. Задача организации, в особенности же существующая теория требует анализа стандартных подходов. А также представители современных социальных резервов лишь добавляют фракционных разногласий и объективно рассмотрены соответствующими инстанциями.",
        attachments: [{
          type: ArticleAttachmentType.Image,
          data: sampleImage
        }, {
          type: ArticleAttachmentType.Place,
          lat: 60.604346,
          lon: 56.837502,
        }, {
          type: ArticleAttachmentType.Pool,
          title: "Название пула",
          multi: false,
          variable: [
            {
              id: 0,
              text: "Текст пула",
            },
            {
              id: 0,
              text: "Текст пула",
            }
          ]
        }
        ],
        author: {
          name: "Автор новости",
          picture: "sample.png",
          username: "author"
        },
        tage: {
          id: 0,
          title: "Тег",
        },
        type: ArticaleType.info,
        like: 10,
        comments: [
          {
            id: 0,
            text: "Текст комментария",
            author: {
              name: "Автор комментария",
              picture: "sample.png",
              username: "author"
            }
          }
        ]
      },
      {
        id: 1,
        title: "Заголовок новости",
        description: "Описание новости",
        date: new Date("2022-01-01"),
        text: "Кстати, элементы политического процесса ограничены исключительно образом мышления. А ещё активно развивающиеся страны третьего мира, инициированные исключительно синтетически, функционально разнесены на независимые элементы. А ещё ключевые особенности структуры проекта будут описаны максимально подробно.\n" +
          "\n" +
          "И нет сомнений, что непосредственные участники технического прогресса призывают нас к новым свершениям, которые, в свою очередь, должны быть ассоциативно распределены по отраслям. Как принято считать, явные признаки победы институционализации неоднозначны и будут представлены в исключительно положительном свете. Задача организации, в особенности же существующая теория требует анализа стандартных подходов. А также представители современных социальных резервов лишь добавляют фракционных разногласий и объективно рассмотрены соответствующими инстанциями.",
        attachments: [{
          type: ArticleAttachmentType.Image,
          data: sampleImage
        }, {
          type: ArticleAttachmentType.Place,
          lat: 60.604346,
          lon: 56.837502,
        }, {
          type: ArticleAttachmentType.Pool,
          title: "Название пула",
          multi: false,
          variable: [
            {
              id: 0,
              text: "Текст пула",
            },
            {
              id: 0,
              text: "Текст пула",
            }
          ]
        }
        ],
        author: {
          name: "Автор новости",
          picture: "sample.png",
          username: "author"
        },
        tage: {
          id: 0,
          title: "Тег",
        },
        type: ArticaleType.info,
        like: 10,
        comments: [
          {
            id: 0,
            text: "Текст комментария",
            author: {
              name: "Автор комментария",
              picture: "sample.png",
              username: "author"
            }
          }
        ]
      },
      {
        id: 2,
        title: "Заголовок новости",
        description: "Описание новости",
        date: new Date("2022-01-01"),
        text: "Кстати, элементы политического процесса ограничены исключительно образом мышления. А ещё активно развивающиеся страны третьего мира, инициированные исключительно синтетически, функционально разнесены на независимые элементы. А ещё ключевые особенности структуры проекта будут описаны максимально подробно.\n" +
          "\n" +
          "И нет сомнений, что непосредственные участники технического прогресса призывают нас к новым свершениям, которые, в свою очередь, должны быть ассоциативно распределены по отраслям. Как принято считать, явные признаки победы институционализации неоднозначны и будут представлены в исключительно положительном свете. Задача организации, в особенности же существующая теория требует анализа стандартных подходов. А также представители современных социальных резервов лишь добавляют фракционных разногласий и объективно рассмотрены соответствующими инстанциями.",
        attachments: [{
          type: ArticleAttachmentType.Image,
          data: sampleImage
        }, {
          type: ArticleAttachmentType.Place,
          lat: 60.604346,
          lon: 56.837502,
        }, {
          type: ArticleAttachmentType.Pool,
          title: "Название пула",
          multi: false,
          variable: [
            {
              id: 0,
              text: "Текст пула",
            },
            {
              id: 0,
              text: "Текст пула",
            }
          ]
        }
        ],
        author: {
          name: "Автор новости",
          picture: "sample.png",
          username: "author"
        },
        tage: {
          id: 0,
          title: "Тег",
        },
        type: ArticaleType.info,
        like: 10,
        comments: [
          {
            id: 0,
            text: "Текст комментария",
            author: {
              name: "Автор комментария",
              picture: "sample.png",
              username: "author"
            }
          }
        ]
      },
      {
        id: 3,
        title: "Заголовок срочной новости",
        description: "Описание срочной новости",
        date: new Date("2023-11-24"),
        text: "Кстати, элементы политического процесса ограничены исключительно образом мышления. А ещё активно развивающиеся страны третьего мира, инициированные исключительно синтетически, функционально разнесены на независимые элементы. А ещё ключевые особенности структуры проекта будут описаны максимально подробно.\n" +
          "\n" +
          "И нет сомнений, что непосредственные участники технического прогресса призывают нас к новым свершениям, которые, в свою очередь, должны быть ассоциативно распределены по отраслям. Как принято считать, явные признаки победы институционализации неоднозначны и будут представлены в исключительно положительном свете. Задача организации, в особенности же существующая теория требует анализа стандартных подходов. А также представители современных социальных резервов лишь добавляют фракционных разногласий и объективно рассмотрены соответствующими инстанциями.",
        attachments: [{
          type: ArticleAttachmentType.Image,
          data: sampleImage
        }, {
          type: ArticleAttachmentType.Place,
          lat: 60.604346,
          lon: 56.837502,
        }, {
          type: ArticleAttachmentType.Pool,
          title: "Название пула",
          multi: false,
          variable: [
            {
              id: 0,
              text: "Текст пула",
            },
            {
              id: 0,
              text: "Текст пула",
            }
          ]
        }
        ],
        author: {
          name: "Автор новости",
          picture: "sample.png",
          username: "author"
        },
        tage: {
          id: 0,
          title: "Тег",
        },
        type: ArticaleType.breaking,
        like: 10,
        comments: [
          {
            id: 0,
            text: "Текст комментария",
            author: {
              name: "Автор комментария",
              picture: "sample.png",
              username: "author"
            }
          }
        ]
      }
    ]}

  />;
}


const sampleImage = "data:image/jpeg;base64,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"
