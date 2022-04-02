  // With the above scripts loaded, you can call `tippy()` with a CSS
  // selector and a `content` prop:
  tippy('#tooltip01', {
      content: 'Пример современных тенденций - современная методология разработки',
      trigger: 'click',
      animation: 'fade',
      maxWidth: 264,
      theme: 'tooltip',


      aria: {
          // `null` when interactive: true, otherwise "describedby"
          content: 'auto',
          // matches `interactive` boolean
          expanded: 'auto',
      },

  });
  tippy('#tooltip02', {
      content: 'Приятно, граждане, наблюдать, как сделанные на базе аналитики выводы вызывают у вас эмоции',
      trigger: 'click',
      animation: 'fade',
      maxWidth: 264,
      theme: 'tooltip',
      aria: {
          // `null` when interactive: true, otherwise "describedby"
          content: 'auto',
          // matches `interactive` boolean
          expanded: 'auto',
      },

  });
  tippy('#tooltip03', {
      content: 'В стремлении повысить качество',
      trigger: 'click',
      animation: 'fade',
      maxWidth: 232,
      theme: 'tooltip',
      aria: {
          // `null` when interactive: true, otherwise "describedby"
          content: 'auto',
          // matches `interactive` boolean
          expanded: 'auto',
      },

  });
