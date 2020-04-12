// -*- mode: javascript; indent-tabs-mode: nil; c-basic-offset: 8 -*-
"use strict";


// FA icons
let shapes = {
    'airliner': {
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="-3.5 -3 32 32" width="32" height="32" add_stroke_selected><defs><style>.cls-1{fill:aircraft_color_fill;}</style></defs><title>airliner_live</title><g id="Layer_2" data-name="Layer 2"><g id="Airliner"><path class="cls-1" d="M12.51,25.75c-.26,0-.74-.71-.86-1.41l-3.33.86L8,25.29l.08-1.41.11-.07c1.13-.68,2.68-1.64,3.2-2-.37-1.06-.51-3.92-.43-8.52v0L8,13.31C5.37,14.12,1.2,15.39,1,15.5a.5.5,0,0,1-.21,0,.52.52,0,0,1-.49-.45,1,1,0,0,1,.52-1l1.74-.91c1.36-.71,3.22-1.69,4.66-2.43a4,4,0,0,1,0-.52c0-.69,0-1,0-1.14l.25-.13H7.16A1.07,1.07,0,0,1,8.24,7.73,1.12,1.12,0,0,1,9.06,8a1.46,1.46,0,0,1,.26.87L9.08,9h.25c0,.14,0,.31,0,.58l1.52-.84c0-1.48,0-7.06,1.1-8.25a.74.74,0,0,1,1.13,0c1.15,1.19,1.13,6.78,1.1,8.25l1.52.84c0-.32,0-.48,0-.58l.25-.13H15.7A1.46,1.46,0,0,1,16,8a1.11,1.11,0,0,1,.82-.28,1.06,1.06,0,0,1,1.08,1.16V9c0,.19,0,.48,0,1.17a4,4,0,0,1,0,.52c1.75.9,4.4,2.29,5.67,3l.73.38a.9.9,0,0,1,.5,1,.55.55,0,0,1-.5.47h0l-.11,0c-.28-.11-4.81-1.49-7.16-2.2H14.06v0c.09,4.6-.06,7.46-.43,8.52.52.33,2.07,1.29,3.2,2l.11.07L17,25.29l-.33-.09-3.33-.86c-.12.7-.6,1.41-.86,1.41h0Z"/></g></g></svg>',
        size: [32,32]
    },
    'balloon': {
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 9 13" width="9px" height="13px" add_stroke_selected><defs><style>.cls-1{fill:aircraft_color_fill;}</style></defs><title>balloon_live</title><g id="Layer_2" data-name="Layer 2"><g id="Balloon"><path class="cls-1" d="M3.56,12.75a.49.49,0,0,1-.46-.34L2.63,11a.51.51,0,0,1,.07-.44l.1-.1-2-3.68a.48.48,0,0,1-.05-.17,4.39,4.39,0,0,1-.48-2A4.29,4.29,0,0,1,4.5.25,4.29,4.29,0,0,1,8.75,4.58a4.39,4.39,0,0,1-.48,2,.45.45,0,0,1-.05.17l-2,3.68a.44.44,0,0,1,.1.1.51.51,0,0,1,.07.45L5.9,12.41a.49.49,0,0,1-.46.34Zm1.6-2.43L6.1,8.59A4.22,4.22,0,0,1,5,8.88v1.44ZM4,10.32V8.88A4.22,4.22,0,0,1,2.9,8.59l.94,1.73Z"/></g></g></svg>',
        size: [9,13],
        noRotate: true
    },
    'cessna': {
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="-7.35 -8 32 32" width="32px" height="32px" add_stroke_selected><defs><style>.cls-1{fill:aircraft_color_fill;}</style></defs><title>cessna_live</title><g id="Layer_2" data-name="Layer 2"><g id="Cessna"><path class="cls-1" d="M8.51,12.75c-.17,0-2-.27-2.56-.35A.41.41,0,0,1,5.6,12V10.87a.41.41,0,0,1,.32-.4l1.81-.37L7.36,6.64H4.75L.6,6a.41.41,0,0,1-.35-.41V4a.41.41,0,0,1,.38-.41l4.09-.28h2.6v-.4l.25,0-.24-.08c0-.21.1-.76.12-1.06A.9.9,0,0,1,8,.94L8.12.54A.41.41,0,0,1,8.5.25a.4.4,0,0,1,.39.29L9,.95a.91.91,0,0,1,.53.75c0,.33.11,1,.13,1.11v.46h2.57l4.12.28a.41.41,0,0,1,.38.41V5.63A.41.41,0,0,1,16.4,6l-4.1.59H9.64L9.26,10.1l1.81.36a.41.41,0,0,1,.32.4V12a.41.41,0,0,1-.34.41c-.56.08-2.37.35-2.55.35Z"/></g></g></svg>',
        size: [32,32]
    },
    'heavy_2e': {
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 29" width="28px" height="29px" add_stroke_selected><defs><style>.cls-1{fill:aircraft_color_fill;}</style></defs><title>heavy_2e_live</title><g id="Layer_2" data-name="Layer 2"><g id="Heavy_2_Eng" data-name="Heavy 2 Eng"><path class="cls-1" d="M9,28.35c0-.16-.17-1,.23-1.36.65-.59,2.82-2.38,3.4-2.86-.51-1.33-.59-5.15-.57-8.22L10,16,.25,19v-.34a1.78,1.78,0,0,1,.82-1.5l7.78-5.07a4.87,4.87,0,0,1-.51-3l0-.22.23,0h2.26l0,.22a8.32,8.32,0,0,1,0,1.81l1.21-.81c0-6.79.18-9.58,1.91-9.87,1.7.14,2,3,2,9.85L17.3,11a8.3,8.3,0,0,1,0-1.8l0-.22h2.51v.24a4.87,4.87,0,0,1-.51,3l7.66,5a1.77,1.77,0,0,1,.8,1.5V19L18,16l-2-.06c0,3.06-.06,6.88-.57,8.21a28.87,28.87,0,0,1,3.5,3A2,2,0,0,1,19,28.34l-.05.31L14.6,26.71c-.14,1.85-.41,1.85-.6,1.85s-.47,0-.6-1.84L9,28.66Z"/></g></g></svg>',
        size: [28,29]
    },
    //MD Series
    //MD11 - Standard Scale 63px, 3in4 Non-linear Scale 53px 
    'md11': {
        svg: '<svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" viewBox="0 0 64 64" width="36px" height="31px" add_stroke_selected><defs><style>.cls-1{fill:aircraft_color_fill;}</style></defs><title>md11_live</title><g id="Layer_2" data-name="Layer 2"><g id="MD11"><path class="cls-1" d="m 32,0.7 0.3,0.1 0.4,0.4 0.5,0.8 0.6,1.4 0.4,1.7 0.7,4.2 0.2,4.1 0,11.8 4.1,3.2 -0.2,-1.1 0,-1.2 0.1,-1.1 0.2,-0.4 2.5,0 0.2,0.4 0.1,1.1 0,1.2 -0.3,1.3 -0.3,0 -0.3,1.5 16.6,13.4 0,0.6 0.4,2.2 0,1.2 -0.4,-0.9 0,0.3 -9.6,-4.6 -0.1,0.6 -0.1,0.3 -0.1,0 -0.1,-0.3 -0.1,-0.8 -4.5,-2.3 -0.1,0.7 -0.1,0.4 -0.1,0 -0.1,-0.4 -0.1,-0.9 -1.1,-0.6 -6.5,-1.4 0,4.4 -0.1,4.2 -0.5,3.7 -0.6,3.3 6.6,5.5 0,3.2 -7,-2.6 -0.1,0.8 -0.2,0.7 -0.3,0 -0.5,2.1 -0.2,0 -0.2,0.6 -0.2,-0.6 -0.2,0 -0.5,-2.1 -0.3,0 -0.2,-0.7 -0.1,-0.8 -7,2.5 0,-3.1 6.6,-5.5 -0.6,-3.3 -0.5,-3.7 -0.1,-4.2 0,-4.4 -6.5,1.4 -1.1,0.6 -0.1,0.9 -0.1,0.3 -0.1,0 -0.1,-0.3 -0.1,-0.7 -4.5,2.3 -0.1,0.8 -0.1,0.3 -0.1,0 -0.1,-0.3 -0.1,-0.6 -9.6,4.6 0,-0.3 -0.4,0.9 0,-1.2 0.4,-2.2 0,-0.6 16.6,-13.4 -0.3,-1.5 -0.3,0 -0.3,-1.3 0,-1.2 0.1,-1.1 0.2,-0.4 2.5,0 0.2,0.4 0.1,1.1 0,1.2 -0.2,1.1 4.1,-3.3 0,-11.7 0.2,-4.1 0.7,-4.2 0.4,-1.7 0.6,-1.4 0.5,-0.8 0.4,-0.4 z" /></g></g></svg>',
        size: [36,31],
        strokeScale: 1.8,
    },
    // C130 from https://discussions.flightaware.com/ads-b-flight-tracking-f21/some-custom-svg-plane-icons-t37783.html
    // by Peter Lowden
    // licensed under CC BY 4.0 (https://creativecommons.org/licenses/by/4.0/)
    'c130': {
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="36px" height="31px" add_stroke_selected><defs><style>.cls-1{fill:aircraft_color_fill;}</style></defs><title>md11_live</title><g id="Layer_2" data-name="Layer 2"><g id="C130"><path class="cls-1" d="m 31,1 1,0 1,1 1,2 0,8 3,0 0,-3 1,-1 1,1 0,3 6,0 0,-3 1,-1 1,1 0,3 10,1 0,2 -1,1 -17,3 -5,0 0,10 -1,1 8,2 0,1 -1,1 -8,0 -1,1 -1,-1 -8,0 -1,-1 0,-1 8,-2 -1,-1 0,-10 -5,0 -17,-3 -1,-1 0,-2 10,-1 0,-3 1,-1 1,1 0,3 6,0 0,-3 1,-1 1,1 0,3 3,0 0,-8 1,-2 1,-1 z"/></g></g></svg>',
        size: [36,31],
        strokeScale: 1.8,
    },
    'heavy_4e': {
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 30" width="28px" height="30px" add_stroke_selected><defs><style>.cls-1{fill:aircraft_color_fill;}</style></defs><title>heavy_4e_live</title><g id="Layer_2" data-name="Layer 2"><g id="Heavy_4_Eng" data-name="Heavy 4 Eng"><path class="cls-1" d="M14,29.62c-.23,0-.52-.16-.71-1.33L8.82,29.58V28l3.56-3.52c-.41-1.51-.4-7.57-.4-9.11L8.46,16.59,1.27,20.76l-1,1.68,0-.91c0-2.28.23-2.45.3-2.52s.59-.51,3.5-3.09A10.47,10.47,0,0,1,4,13l0-.22.23,0H6.16v.23a11.63,11.63,0,0,1,0,1.26c.74-.68,1.36-1.28,1.69-1.61a9.54,9.54,0,0,1-.16-3.15l0-.22.23-.05H9.87v.23a11.49,11.49,0,0,1,0,1.31l.87-.84c.67-.66,1.06-1,1.27-1.19,0-6.24.53-8.46,2-8.46,1.23,0,2,1.42,2,8.46.21.17.59.53,1.27,1.19l.88.85a11.45,11.45,0,0,1,0-1.32V9.19h2.18v.24a9.53,9.53,0,0,1-.15,3.18c.33.32.95.93,1.69,1.61a11.5,11.5,0,0,1,0-1.27v-.23H24V13a10.49,10.49,0,0,1-.1,3L27.4,19c.09.09.28.26.32,2.54l0,.91-1-1.68L19.5,16.57,16,15.34c0,1.53.07,7.49-.39,9.11L19.18,28v1.61l-4.46-1.29C14.52,29.46,14.23,29.62,14,29.62Z"/></g></g></svg>',
        size: [28,30]
    },
    'helicopter': {
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="-8 -9 32 34" width="32px" height="34px" add_stroke_selected><defs><style>.cls-1{fill:aircraft_color_fill;}</style></defs><title>helicopter_live</title><g id="Layer_2" data-name="Layer 2"><g id="Roto"><path class="cls-1" d="M8,17.75c-1.38,0-2.46-.63-2.46-1.43,0-.6.58-1.1,1.49-1.32V12.06A5.27,5.27,0,0,1,6,9.53L1.1,13.6l-.75-1L5.78,8.09c0-.25,0-.51,0-.77a12.28,12.28,0,0,1,.09-1.49L.38,1.24l.7-.89,5,4.2C6.48,3,7.17,2.1,8,2.1s1.52,1,1.91,2.57l5-4.21.75,1L10.1,6.07a12.4,12.4,0,0,1,.06,1.24c0,.22,0,.44,0,.65l5.47,4.59-.7.89L10,9.31a8.44,8.44,0,0,1-.35,1.4,3.83,3.83,0,0,1-.55,1.11L9,12v3c.91.22,1.49.72,1.49,1.32C10.46,17.12,9.38,17.75,8,17.75Z"/></g></g></svg>',
        size: [32,34],
        strokeScale: 1.1,
    },
    'hi_perf': {
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 21" width="15px" height="21px" add_stroke_selected><defs><style>.cls-1{fill:aircraft_color_fill;}</style></defs><title>hi_perf_live</title><g id="Layer_2" data-name="Layer 2"><g id="Hi_Perf" data-name="Hi Perf"><path class="cls-1" d="M3.14,20.76v-1.6l2.57-1.7V16.1H.26V12.25H1.61v1.17L5.28,9.9c.14-1.16,1-8.19,2-9.3L7.5.38l.2.22c1,1.12,1.89,8.14,2,9.3l3.67,3.52V12.25h1.35V16.1H9.29v1.35l2.57,1.7v1.6Z"/></g></g></svg>',
        size: [15,21]
    },
    'single_turbo': {
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19 19" width="18px" height="18px" add_stroke_selected><defs><style>.cls-1{fill:aircraft_color_fill;}</style></defs><title>single_turbo</title><g id="Layer_2" data-name="Layer 2"><g id="single_turbo" data-name="single_turbo"><path class="cls-1" d="M 9.53,0.50 C 9.51,0.54 9.42,0.76 9.38,0.82 9.05,0.53 6.02,0.49 6.02,0.99 c 0.50,0 2.50,0.13 3.33,-0.08 C 8.52,1.63 8.53,3.51 8.23,6.47 L 1.33,7.00 C 0.50,7.07 0.50,7.57 0.50,8.44 L 5.97,9.39 C 6.71,9.58 8.12,10.04 8.12,10.04 c 0,0 0.29,4.81 0.82,6.26 l -2.91,0.67 c 0,0 -0.19,0.63 -0.19,1.20 l 3.54,0.23 0.08,0.11 0.08,-0.11 3.55,-0.20 c -0.00,-0.56 -0.18,-1.20 -0.18,-1.20 L 9.99,16.30 c 0.55,-1.44 0.88,-6.25 0.88,-6.25 0,0 1.41,-0.45 2.15,-0.63 l 5.48,-0.90 c 0.01,-0.87 0.01,-1.38 -0.81,-1.45 L 10.79,6.49 C 10.51,3.52 10.54,1.64 9.71,0.91 10.54,1.13 12.54,1.02 13.04,1.03 13.05,0.52 10.02,0.53 9.68,0.82 9.65,0.76 9.55,0.54 9.53,0.50 Z"/></g></g></svg>',
    size: [18,18]
    },
    'jet_nonswept': {
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="-2.2 -2.2 22 22" width="22" height="22" add_stroke_selected><defs><style>.cls-1{fill:aircraft_color_fill;}</style></defs><title>jet_nonswept_live</title><g id="Layer_2" data-name="Layer 2"><g id="Bizjet_Non-Swept" data-name="Bizjet Non-Swept"><path class="cls-1" d="M9,17.09l-3.51.61v-.3c0-.65.11-1,.33-1.09L8.5,15a5.61,5.61,0,0,1-.28-1.32l-.53-.41-.1-.69H7.12l0-.21a7.19,7.19,0,0,1-.15-2.19L.24,9.05V8.84c0-1.1.51-1.15.61-1.15L7.8,7.18V2.88C7.8.64,8.89.3,8.93.28L9,.26l.07,0s1.13.36,1.13,2.6v4.3l7,.51c.09,0,.59.06.59,1.15v.21l-6.69,1.16a7.17,7.17,0,0,1-.15,2.19l0,.21h-.47l-.1.69-.53.41A5.61,5.61,0,0,1,9.5,15l2.74,1.28c.2.07.31.43.31,1.08v.3Z"/></g></g></svg>',
        size: [22,22]
    },
    'jet_swept': {
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 24" width="18px" height="24" add_stroke_selected><defs><style>.cls-1{fill:aircraft_color_fill;}</style></defs><title>jet_swept_live</title><g id="Layer_2" data-name="Layer 2"><g id="Bizjet_Swept" data-name="Bizjet Swept"><path class="cls-1" d="M9.44,23c-.1.6-.35.6-.44.6s-.34,0-.44-.6l-3,.67V22.6A.54.54,0,0,1,6,22.05l2.38-1.12L8,19.33H6.69l0-.2a8.23,8.23,0,0,1-.14-3.85l.06-.18H7.73V13.19h-2L.26,14.29v-.93c0-.28.07-.46.22-.53l7.25-3.6V3.85A4.47,4.47,0,0,1,8.83.49L9,.34l.17.15a4.47,4.47,0,0,1,1.1,3.36V9.23l7.25,3.6c.14.07.22.25.22.53v.93l-5.51-1.1h-2V15.1h1.17l.06.18a8.24,8.24,0,0,1-.15,3.84l0,.2H10l-.36,1.6,2.43,1.14a.52.52,0,0,1,.35.53v1.08Z"/></g></g></svg>',
        size: [18,24]
    },
    'twin_large': {
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 20" width="21px" height="20px" add_stroke_selected><defs><style>.cls-1{fill:aircraft_color_fill;}</style></defs><title>twin_large_live</title><g id="Layer_2" data-name="Layer 2"><g id="Twinprop_Large" data-name="Twinprop Large"><path class="cls-1" d="M10.1,18.34H7l0-.21c-.08-.54,0-.87.11-1L7.19,17l.2,0,2.35-.33c-.16-.82-.42-2.9-.42-3.14s0-2.71,0-3.51H8c-.12,1.34-.41,1.36-.55,1.37h0c-.19,0-.46,0-.6-1.55L.27,9.52l0-.25c.06-.73.31-.9.45-.93l6-.48a3.65,3.65,0,0,1,.3-2,.45.45,0,0,1,.32-.16h0a.39.39,0,0,1,.3.12A3.67,3.67,0,0,1,8,7.77l1.26-.07c0-.71,0-2.92,0-4.48A3.84,3.84,0,0,1,10.1.4a.4.4,0,0,1,.28-.16h.23A.4.4,0,0,1,10.9.4a3.84,3.84,0,0,1,.87,2.81c0,1.55,0,3.77,0,4.48L13,7.77a3.67,3.67,0,0,1,.29-1.94.38.38,0,0,1,.28-.12.46.46,0,0,1,.34.16,3.66,3.66,0,0,1,.3,2l6,.48c.18,0,.43.21.49.94l0,.25-6.53.3c-.14,1.55-.42,1.55-.59,1.55s-.45,0-.57-1.37H11.74c0,.8,0,3.27,0,3.51s-.26,2.32-.42,3.14l2.38.34h.11l.13.13c.15.18.19.51.11,1l0,.21H10.9l-.4,1Z"/></g></g></svg>',
        size: [21,20],
        strokeScale: 0.9,
    },
    'twin_small': {
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="-1 -1.15 21 18" width="21px" height="18px" add_stroke_selected><defs><style>.cls-1{fill:aircraft_color_fill;}</style></defs><title>twin_small_live</title><g id="Layer_2" data-name="Layer 2"><g id="Twinprop_Small" data-name="Twinprop Small"><path class="cls-1" d="M9.5,15.75c-.21,0-.34-.17-.41-.51l-2.88.23v-.27c0-.78,0-1.11.28-1.13L9,13.1c-.31-1.86-.55-5-.59-5.55l-.08-.09H6.08L.25,6.54v-1A.43.43,0,0,1,.67,5l3.75-.27L5,4.45V3.53H4.73V2.7a.35.35,0,0,1,.34-.35h.07c.12-.52.26-.83.54-.83s.42.31.53.83h.07a.35.35,0,0,1,.34.35v.83H6.36v1l2-.08C8.42.81,9.09.25,9.49.25s1.09.55,1.12,4.21l2,.08v-1h-.25V2.7a.35.35,0,0,1,.34-.35h.07c.12-.52.26-.83.53-.83s.42.31.54.83h.07a.35.35,0,0,1,.34.35v.83H14v.92l.57.32L18.32,5a.42.42,0,0,1,.43.46v1L13,7.46H10.71l-.08.09c0,.56-.27,3.68-.59,5.55l2.46,1c.28,0,.28.35.28,1.13v.27l-2.88-.23C9.84,15.58,9.71,15.75,9.5,15.75Z"/></g></g></svg>',
        size: [21,18]
    },
    'ground_emergency': {
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 6 15" width="6px" height="15px" add_stroke_selected><defs><style>.cls-1{fill:#5a5a5a;}.cls-2{fill:#fff;}</style></defs><title>emergency_dark</title><g id="Layer_2" data-name="Layer 2"><g id="Emergency"><path class="cls-1" d="M1.77,0a3.32,3.32,0,0,0-.63.07L1,.11.86.16h0L.7.23.59.3l0,0L.49.38l0,.06a.15.15,0,0,0,0,0h0v0h0V.9l0,0,0,0h0l0,.07V4c0,.13.06.16.1.23v.3H.09c0,1.32,0,3.38,0,4.8l0,.44C.07,9.82,0,9.88,0,10v2.82c0,.09-.05.14.07.18v1.9a50.76,50.76,0,0,0,5.78,0V13.06C6,13,6,12.93,6,12.84V10c0-.15-.05-.2-.11-.22V9.37c0-1.41,0-3.51,0-4.8H5.55v-.3c0-.08.11-.1.09-.23v-3L5.6,1h0l0,0,0,0V.51h0v0h0a.15.15,0,0,0,0,0,.16.16,0,0,0,0-.06L5.41.32l0,0L5.26.23,5.12.17h0L5,.11l-.16,0A3.45,3.45,0,0,0,4,0H1.77Z"/><path class="cls-2" d="M.77,2.77A4.31,4.31,0,0,1,3,2.33a4.31,4.31,0,0,1,2.26.44l-.38.92A7.51,7.51,0,0,0,3,3.41a7.9,7.9,0,0,0-1.91.27Z"/><path class="cls-2" d="M4.35,8.27a1.05,1.05,0,0,1-.59.93A3.5,3.5,0,0,0,2.62,6.63a1.71,1.71,0,0,1-.56,1.26l-.41.38a1.71,1.71,0,0,0-.56,1.26A1.79,1.79,0,0,0,2.4,11.21H3.6A1.79,1.79,0,0,0,4.92,9.52,1.71,1.71,0,0,0,4.35,8.27Z"/></g></g></svg>',
        size: [6, 15]
    },
    'ground_service': {
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 6 15" width="6px" height="15px" add_stroke_selected><defs><style>.cls-1{fill:#5a5a5a;}.cls-2{fill:#fff;}</style></defs><title>service_dark</title><g id="Layer_2" data-name="Layer 2"><g id="Service"><path class="cls-1" d="M1.77,0a3.32,3.32,0,0,0-.63.07L1,.11.86.16h0L.7.23.59.3l0,0L.49.38l0,.06a.15.15,0,0,0,0,0h0v0h0V.9l0,0,0,0h0l0,.07V4c0,.13.06.16.1.23v.3H.09c0,1.32,0,3.38,0,4.8l0,.44C.07,9.82,0,9.88,0,10v2.82c0,.09-.05.14.07.18v1.9a50.76,50.76,0,0,0,5.78,0V13.06C6,13,6,12.93,6,12.84V10c0-.15-.05-.2-.11-.22V9.37c0-1.41,0-3.51,0-4.8H5.55v-.3c0-.08.11-.1.09-.23v-3L5.6,1h0l0,0,0,0V.51h0v0h0a.15.15,0,0,0,0,0,.16.16,0,0,0,0-.06L5.41.32l0,0L5.26.23,5.12.17h0L5,.11l-.16,0A3.45,3.45,0,0,0,4,0H1.77Z"/><path class="cls-2" d="M.77,2.77A4.31,4.31,0,0,1,3,2.33a4.31,4.31,0,0,1,2.26.44l-.38.92A7.51,7.51,0,0,0,3,3.41a7.9,7.9,0,0,0-1.91.27Z"/><path class="cls-2" d="M4.85,8a1.67,1.67,0,0,0-.65-1.3A.12.12,0,0,0,4,6.74v.95a.12.12,0,0,1,0,.09l-.9.65a.12.12,0,0,1-.13,0L2,7.77a.12.12,0,0,1,0-.09V6.73a.11.11,0,0,0-.18-.08A1.72,1.72,0,0,0,1.15,8,1.66,1.66,0,0,0,2,9.4a.19.19,0,0,1,.1.17l0,1.54a.1.1,0,0,0,.11.1H3.78c.07,0,.12,0,.11-.1V9.57A.22.22,0,0,1,4,9.4,1.7,1.7,0,0,0,4.85,8Z"/></g></g></svg>',
        size: [6, 15]
    },
    'ground_unknown': {
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 6 15" width="6px" height="15px" add_stroke_selected><defs><style>.cls-1{fill:#5a5a5a;}.cls-2{fill:#fff;}</style></defs><title>unknown_dark</title><g id="Layer_2" data-name="Layer 2"><g id="Unknown"><path class="cls-1" d="M1.77,0a3.32,3.32,0,0,0-.63.07L1,.11.86.16h0L.7.23.59.3l0,0L.49.38l0,.06a.15.15,0,0,0,0,0h0v0h0V.9l0,0,0,0h0l0,.07V4c0,.13.06.16.1.23v.3H.09c0,1.32,0,3.38,0,4.8l0,.44C.07,9.82,0,9.88,0,10v2.82c0,.09-.05.14.07.18v1.9a50.76,50.76,0,0,0,5.78,0V13.06C6,13,6,12.93,6,12.84V10c0-.15-.05-.2-.11-.22V9.37c0-1.41,0-3.51,0-4.8H5.55v-.3c0-.08.11-.1.09-.23v-3L5.6,1h0l0,0,0,0V.51h0v0h0a.15.15,0,0,0,0,0,.16.16,0,0,0,0-.06L5.41.32l0,0L5.26.23,5.12.17h0L5,.11l-.16,0A3.45,3.45,0,0,0,4,0H1.77Z"/><path class="cls-2" d="M.77,2.77A4.31,4.31,0,0,1,3,2.33a4.31,4.31,0,0,1,2.26.44l-.38.92A7.51,7.51,0,0,0,3,3.41a7.9,7.9,0,0,0-1.91.27Z"/><path class="cls-2" d="M4.31,7.51A1.1,1.1,0,0,0,4,7.12a1.55,1.55,0,0,0-.5-.3,2.18,2.18,0,0,0-.77-.12,1.81,1.81,0,0,0-.65.11,1.48,1.48,0,0,0-.5.32,1.43,1.43,0,0,0-.32.48,1.62,1.62,0,0,0-.12.6v.12H2.31V8.2a1,1,0,0,1,0-.25.54.54,0,0,1,.09-.19.42.42,0,0,1,.15-.12.49.49,0,0,1,.22,0,.41.41,0,0,1,.29.09.39.39,0,0,1,.1.3.33.33,0,0,1,0,.19A.65.65,0,0,1,3,8.33l-.22.16a1.61,1.61,0,0,0-.25.22A1.28,1.28,0,0,0,2.33,9a1.2,1.2,0,0,0-.11.45v.37H3.29V9.52a.44.44,0,0,1,.09-.22,1,1,0,0,1,.19-.18l.25-.17a1.35,1.35,0,0,0,.27-.23,1.19,1.19,0,0,0,.21-.33,1.23,1.23,0,0,0,.09-.49A1.06,1.06,0,0,0,4.31,7.51Z"/><rect class="cls-2" x="2.18" y="10.26" width="1.12" height="1.02"/></g></g></svg>',
        size: [6, 15]
    },
    'ground_fixed': {
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12" width="12px" height="12px" add_stroke_selected><defs><style>.cls-1{fill:#5a5a5a;}.cls-2{fill:#fff;}</style></defs><title>fixed_dark</title><g id="Layer_2" data-name="Layer 2"><g id="Fixed"><polygon class="cls-1" points="0 0 0 0.43 0 12 12 12 12 0 0 0"/><path class="cls-2" d="M3.24,2.73,1.36.86h9.29L8.77,2.73A4.29,4.29,0,0,0,3.24,2.73Z"/><circle class="cls-2" cx="6" cy="6" r="3.58" transform="translate(-2.49 6) rotate(-45)"/><path class="cls-2" d="M2.73,3.23a4.29,4.29,0,0,0,0,5.54L.86,10.62V1.37Z"/><path class="cls-2" d="M3.24,9.28a4.29,4.29,0,0,0,5.54,0l1.87,1.87H1.35Z"/><path class="cls-2" d="M9.28,8.77a4.29,4.29,0,0,0,0-5.54l1.86-1.86v9.26Z"/><circle class="cls-1" cx="6" cy="6" r="2" transform="translate(-2.49 6) rotate(-45)"/></g></g></svg>',
        size: [12, 12],
        noRotate: true,
    },
    'unknown': {
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="-2.5 -2.5 22 22" width="22" height="22"  add_stroke_selected><defs><style>.cls-1{fill:aircraft_color_fill;}</style></defs><title>unknown_live</title><g id="Layer_2" data-name="Layer 2"><g id="Unknown"><path class="cls-1" d="M5.25,16.76c-.92,0-1.33-.46-1.39-.86a1,1,0,0,1,.79-1.11c.25-.08,1.22-.43,2.63-1V10.65h-6c-.68,0-1-.35-1-.66a.81.81,0,0,1,.6-.86C1.14,9,4.8,7,7.28,5.63V3c0-1.11.44-2.71,1.23-2.71S9.77,1.84,9.77,3V5.63C12.22,7,15.87,9,16.14,9.13a.8.8,0,0,1,.61.86c-.05.31-.36.67-1.05.67H9.77v3.19l1.61.59,1,.36a1.05,1.05,0,0,1,.8,1.11c-.07.39-.47.86-1.39.86Z"/></g></g></svg>',
        size: [22,22]
    },
}

let TypeDesignatorIcons = {
    'SHIP': ['balloon', 1], // Blimp

    'A318': ['airliner', 0.88], // shortened a320 68t
    'A319': ['airliner', 0.92], // shortened a320 75t
    'A19N': ['airliner', 0.92], // shortened a320
    'A320': ['airliner', 0.96], // 78t
    'A20N': ['airliner', 0.96],
    'A321': ['airliner', 1.02], // stretched a320 93t
    'A21N': ['airliner', 1.02], // stretched a320

    'A306': ['heavy_2e', 0.93],
    'A330': ['heavy_2e', 0.96],
    'A332': ['heavy_2e', 0.96],
    'A333': ['heavy_2e', 0.96],
    'A338': ['heavy_2e', 0.96], // 800 neo
    'A339': ['heavy_2e', 0.96], // 900 neo
    'DC10': ['md11', 0.92],
    'MD11': ['md11', 0.96],

    'A359': ['heavy_2e', 1.00],
    'A35K': ['heavy_2e', 1.02],

    'A388': ['heavy_4e', 1.04],

    // dubious since these are old-generation 737s
    // but the shape is similar
    'B731': ['airliner', 0.88],
    'B732': ['airliner', 0.88],
    'B733': ['airliner', 0.88],
    'B734': ['airliner', 0.94],
    'B735': ['airliner', 0.96],

    // these probably need reworking
    // since they vary in length
    'B736': ['airliner', 0.92],
    'B737': ['airliner', 0.94],
    'B738': ['airliner', 0.96],
    'B739': ['airliner', 1],

    'J328': ['airliner', 0.78], // 15t
    'E170': ['airliner', 0.82], // 38t
    'E75S/L': ['airliner', 0.82],
    'E75L': ['airliner', 0.82],
    'E75S': ['airliner', 0.82],  // 40t
    'E190': ['airliner', 0.84], // 52t
    'E195': ['airliner', 0.84], // 52t
    'E290': ['airliner', 0.84], // 56t
    'E295': ['airliner', 0.86], // 62t
    'BCS1': ['airliner', 0.86], // 64t
    'BCS3': ['airliner', 0.88], // 70t

    'B741': ['heavy_4e', 0.96],
    'B742': ['heavy_4e', 0.96],
    'B743': ['heavy_4e', 0.96],
    'B744': ['heavy_4e', 0.96],
    'B74D': ['heavy_4e', 0.96],
    'B74S': ['heavy_4e', 0.96],
    'B74R': ['heavy_4e', 0.96],
    'BLCF': ['heavy_2e', 0.96],
    'BSCA': ['heavy_4e', 0.96], // hah!
    'B748': ['heavy_4e', 0.98],

    'B752': ['airliner', 1.04],
    'B753': ['airliner', 1.04],

    'B772': ['heavy_2e', 1.00], // all pretty similar except for length
    'B773': ['heavy_2e', 1.02],
    'B77L': ['heavy_2e', 1.02],
    'B77W': ['heavy_2e', 1.04],

    'C680': ['jet_swept', 0.92], // 14t
    'C68A': ['jet_swept', 0.92], // 14t
    'C750': ['jet_swept', 0.94], // 17t
    'FA50': ['jet_swept', 0.94], // 18t
    'CL30': ['jet_swept', 0.92], // 14t
    'CL35': ['jet_swept', 0.92],
    'CL60': ['jet_swept', 0.96], // 22t
    'GLEX': ['jet_swept', 1],
    'G200': ['jet_swept', 0.92], // 16t
    'G280': ['jet_swept', 0.92], // 18t
    'GL5T': ['jet_swept', 1],
    'GLF2': ['jet_swept', 0.96], // 29t
    'GLF3': ['jet_swept', 0.96], // 31t
    'GLF4': ['jet_swept', 0.96], // 34t
    'GLF5': ['jet_swept', 0.98], // 41t
    'GLF6': ['jet_swept', 1], // 48t
    'E135': ['jet_swept', 0.92], // 20t
    'E35L': ['jet_swept', 0.92], // 24t
    'E145': ['jet_swept', 0.92], // 22t
    'E45X': ['jet_swept', 0.92], // 24t
    'CRJ1': ['jet_swept', 0.92], // 24t
    'CRJ2': ['jet_swept', 0.92], // 24t
    'CRJ7': ['jet_swept', 0.94], // 34t
    'CRJ9': ['jet_swept', 0.96], // 38t
    'CRJX': ['jet_swept', 0.98], // 41t
    'MD80': ['jet_swept', 1.04], // 60t
    'MD81': ['jet_swept', 1.04],
    'MD82': ['jet_swept', 1.04],
    'MD83': ['jet_swept', 1.04],
    'MD87': ['jet_swept', 1.04],
    'MD88': ['jet_swept', 1.04], // 72t
    'B712': ['jet_swept', 1.04], // 54t
    'F100': ['jet_swept', 1], // 45t

    'C501': ['jet_nonswept', 1],
    'C510': ['jet_nonswept', 1],
    'C25A': ['jet_nonswept', 1],
    'C525': ['jet_nonswept', 1],
    'C550': ['jet_nonswept', 1],
    'C560': ['jet_nonswept', 1],
    'C56X': ['jet_nonswept', 1], // 9t
    'C650': ['jet_nonswept', 1], // 11t
    'LJ35': ['jet_nonswept', 1], // 8t
    'LR35': ['jet_nonswept', 1], // wrong but in database
    'LJ60': ['jet_nonswept', 1], // 10t
    'LR45': ['jet_nonswept', 1], // 10t
    'G150': ['jet_nonswept', 1], // 11t
    'H25A': ['jet_nonswept', 1.04], // 11t
    'H25B': ['jet_nonswept', 1.04], // 11t
    'H25C': ['jet_nonswept', 1.04], // 11t
    'PRM1': ['jet_nonswept', 0.96],
    'E55P': ['jet_nonswept', 0.96],
    'E50P': ['jet_nonswept', 0.96],
    'EA50': ['jet_nonswept', 0.96],
    'HDJT': ['jet_nonswept', 0.96],
    'SF50': ['jet_nonswept', 0.94],


    'A37': ['hi_perf', 1],
    'A700': ['hi_perf', 1],
    'LEOP': ['hi_perf', 1],
    'ME62': ['hi_perf', 1],
    'T2': ['hi_perf', 1],
    'T37': ['hi_perf', 1],
    'T38': ['hi_perf', 1],
    'A10': ['hi_perf', 1],
    'A148': ['hi_perf', 1],
    'A3': ['hi_perf', 1],
    'A6': ['hi_perf', 1],
    'AJET': ['hi_perf', 1],
    'AT3': ['hi_perf', 1],
    'CKUO': ['hi_perf', 1],
    'EUFI': ['hi_perf', 1],
    'F1': ['hi_perf', 1],
    'F111': ['hi_perf', 1],
    'F117': ['hi_perf', 1],
    'F14': ['hi_perf', 1],
    'F15': ['hi_perf', 1],
    'F18': ['hi_perf', 1],
    'F22': ['hi_perf', 1],
    'F22A': ['hi_perf', 1],
    'F4': ['hi_perf', 1],
    'F5': ['hi_perf', 1],
    'FOUG': ['hi_perf', 1],
    'J8A': ['hi_perf', 1],
    'J8B': ['hi_perf', 1],
    'JH7': ['hi_perf', 1],
    'LTNG': ['hi_perf', 1],
    'METR': ['hi_perf', 1],
    'MG19': ['hi_perf', 1],
    'MG25': ['hi_perf', 1],
    'MG29': ['hi_perf', 1],
    'MG31': ['hi_perf', 1],
    'MG44': ['hi_perf', 1],
    'MIR4': ['hi_perf', 1],
    'MT2': ['hi_perf', 1],
    'Q5': ['hi_perf', 1],
    'RFAL': ['hi_perf', 1],
    'S3': ['hi_perf', 1],
    'S37': ['hi_perf', 1],
    'SR71': ['hi_perf', 1],
    'SU15': ['hi_perf', 1],
    'SU24': ['hi_perf', 1],
    'SU25': ['hi_perf', 1],
    'SU27': ['hi_perf', 1],
    'T22M': ['hi_perf', 1],
    'T4': ['hi_perf', 1],
    'TOR': ['hi_perf', 1],
    'TU22': ['hi_perf', 1],
    'VAUT': ['hi_perf', 1],
    'WB57': ['hi_perf', 1],
    'Y130': ['hi_perf', 1],
    'YK28': ['hi_perf', 1],
    // 'BE20': [_b200, 1],

    'C130': ['c130', 1],
    'C30J': ['c130', 1],

    'A400': ['c130', 1.15],
    //
    'GND': ['ground_unknown', 1],
    'GRND': ['ground_unknown', 1],
    'SERV': ['ground_service', 1],
    'EMER': ['ground_emergency', 1],
    'TWR': ['ground_fixed', 1],
};

// Maps ICAO aircraft type description codes (e.g. "L2J") to aircraft icons. This is used if the ICAO type designator (e.g. "B731")
// cannot be found in the TypeDesignatorIcons mappings. The key can be one of the following:
//   - Single character: The basic aircraft type letter code (e.g. "H" for helicopter).
//   - Three characters: The ICAO type description code (e.g. "L2J" for landplanes with 2 jet engines).
//   - Five characters: The ICAO type description code concatenated with the wake turbulence category code, separated by
//     a dash (e.g. "L2J-M").

let TypeDescriptionIcons = {
    'H': ['helicopter', 1],

    'L1P': ['cessna', 1],
    'L1T': ['single_turbo', 1],
    'L1J': ['hi_perf', 1],

    'L2P': ['twin_small', 1],
    'L2T': ['twin_large', 0.96],
    'L2T-M': ['twin_large', 1.12],

    'L1J-L': ['jet_nonswept', 1], // < 7t
    'L2J-L': ['jet_nonswept', 1], // < 7t
    'L2J-M': ['airliner', 1], // < 136t
    'L2J-H': ['heavy_2e', 0.96], // > 136t

    'L3J-H': ['md11', 1], // > 136t

    'L4T-M': ['c130', 1],
    'L4T-H': ['c130', 1.15],

    'L4J-H': ['heavy_4e' , 0.96],
};

let CategoryIcons = {
    "A1" : ['cessna', 1],// < 7t

    "A2" : ['jet_swept', 1], // < 34t

    "A3" : ['airliner', 0.96], // < 136t

    "A4" : ['airliner', 1], // < 136t

    "A5" : ['heavy_2e', 0.92], // > 136t

    "A6" : ['hi_perf', 1],

    "A7" : ['helicopter', 1],

    "B2" : ['balloon', 1],

    'C0' : ['ground_unknown', 1],

    'C1' : ['ground_emergency', 1],

    'C2' : ['ground_service', 1],

    'C3' : ['ground_fixed', 1],
};

function getBaseMarker(category, typeDesignator, typeDescription, wtc) {
    if (typeDesignator in TypeDesignatorIcons) {
        let shape = TypeDesignatorIcons[typeDesignator][0];
        let scaling = TypeDesignatorIcons[typeDesignator][1];
        return [shape, scaling];
    }

    if (typeDescription !== undefined && typeDescription !== null && typeDescription.length === 3) {
        if (wtc !== undefined && wtc !== null && wtc.length === 1) {
            let typeDescriptionWithWtc = typeDescription + "-" + wtc;
            if (typeDescriptionWithWtc === "L2J-M" && category === "A2") {
                return ["jet_swept", 1];
            }
            if (typeDescriptionWithWtc in TypeDescriptionIcons) {
                let shape = TypeDescriptionIcons[typeDescriptionWithWtc][0];
                let scaling = TypeDescriptionIcons[typeDescriptionWithWtc][1];
                return [shape, scaling];
            }
        }

        if (typeDescription in TypeDescriptionIcons) {
            let shape = TypeDescriptionIcons[typeDescription][0];
            let scaling = TypeDescriptionIcons[typeDescription][1];
            return [shape, scaling];
        }

        let basicType = typeDescription.charAt(0);
        if (basicType in TypeDescriptionIcons) {
            return [TypeDescriptionIcons[basicType][0], 1];
        }
    }

    if (category in CategoryIcons) {
        return CategoryIcons[category];
    }

    return ['unknown', 1];
}

function svgPathToSvg(path, stroke, fill, selected_stroke) {
    path = path.replace('aircraft_color_fill', fill).replace('aircraft_color_stroke', stroke).replace('add_stroke_selected', selected_stroke);
    return path;
}


function svgPathToURI(path, stroke, fill, selected_stroke) {
    return "data:image/svg+xml;base64," + btoa(svgPathToSvg(path, stroke, fill, selected_stroke));
}
