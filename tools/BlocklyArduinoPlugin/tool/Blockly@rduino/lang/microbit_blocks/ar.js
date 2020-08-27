'use strict';

goog.provide('Blockly.Msg.ar');

goog.require('Blockly.Msg');

Blockly.Msg.CAT_MICROBIT_ACCEL =  "مقاييس التسارع" ;
Blockly.Msg.CAT_MICROBIT_BUTTONS =  "الأزرار" ;
Blockly.Msg.CAT_MICROBIT_COMPASS =  'بوصلة' ;
Blockly.Msg.CAT_MICROBIT_DISPLAY =  'شاشة';
Blockly.Msg.CAT_MICROBIT_IMAGE =  'صورة' ;
Blockly.Msg.CAT_MICROBIT_MICROBIT =  'Micro: Bit';
Blockly.Msg.CAT_MICROBIT_MUSIQUE =  "موسيقى" ;
Blockly.Msg.CAT_MICROBIT_NEOPIXELS =  'Neopixels';
Blockly.Msg.CAT_MICROBIT_PINS =  'الدبابيس';
Blockly.Msg.CAT_MICROBIT_RADIO =  "راديو" ;
Blockly.Msg.CAT_MICROBIT_SPEECH =  'الصوت';
Blockly.Msg.MICROBIT_ACCELEROMETER_GET_X_MESSAGE0 =  "التسارع على المحور X";
Blockly.Msg.MICROBIT_ACCELEROMETER_GET_X_TOOLTIP =  "الحصول على قياس التسارع في المحور X.";
Blockly.Msg.MICROBIT_ACCELEROMETER_GET_X_HELPURL =  'https://microbit-micropython.readthedocs.io/en/latest/accelerometer.html#microbit.accelerometer.get_x';
Blockly.Msg.MICROBIT_ACCELEROMETER_GET_Y_MESSAGE0 =  "التسارع على المحور Y";
Blockly.Msg.MICROBIT_ACCELEROMETER_GET_Y_TOOLTIP =  "احصل على قياس التسارع في المحور Y.";
Blockly.Msg.MICROBIT_ACCELEROMETER_GET_Y_HELPURL =  'https://microbit-micropython.readthedocs.io/en/latest/accelerometer.html#microbit.accelerometer.get_y';
Blockly.Msg.MICROBIT_ACCELEROMETER_GET_Z_MESSAGE0 =  "التسارع على المحور Z";
Blockly.Msg.MICROBIT_ACCELEROMETER_GET_Z_TOOLTIP =  'احصل على قياس التسارع في المحور Z.';
Blockly.Msg.MICROBIT_ACCELEROMETER_GET_Z_HELPURL =  'https://microbit-micropython.readthedocs.io/en/latest/accelerometer.html#microbit.accelerometer.get_z';
Blockly.Msg.MICROBIT_ACCELEROMETER_WAS_GESTURE_MESSAGE0 =  'كانت الإيماءة %1' ;
Blockly.Msg.MICROBIT_ACCELEROMETER_WAS_GESTURE_TOOLTIP =  'قم بإرجاع صحيح أو خطأ لتوضيح ما إذا كانت الإيماءة المسماة نشطة منذ آخر فحص.';
Blockly.Msg.MICROBIT_ACCELEROMETER_WAS_GESTURE_HELPURL =  'https://microbit-micropython.readthedocs.io/en/latest/accelerometer.html#microbit.accelerometer.was_gesture';
Blockly.Msg.MICROBIT_ACCELEROMETER_IS_GESTURE_MESSAGE0 =  'هي الإيماءة %1';
Blockly.Msg.MICROBIT_ACCELEROMETER_IS_GESTURE_TOOLTIP =  'إرجاع صحيح أو خطأ لتوضيح ما إذا كانت الإيماءة المسماة نشطة حاليًا.';
Blockly.Msg.MICROBIT_ACCELEROMETER_IS_GESTURE_HELPURL =  'https://microbit-micropython.readthedocs.io/en/latest/accelerometer.html#microbit.accelerometer.is_gesture';
Blockly.Msg.MICROBIT_ACCELEROMETER_GET_GESTURES_MESSAGE0 =  "الحصول على إيماءات" ;
Blockly.Msg.MICROBIT_ACCELEROMETER_GET_GESTURES_TOOLTIP =  'إعادة سجل الإيماءات. أحدث إيماءة هي الأخيرة. يمسح أيضًا تاريخ الإيماءات. ';
Blockly.Msg.MICROBIT_ACCELEROMETER_GET_GESTURES_HELPURL =  'https://microbit-micropython.readthedocs.io/en/latest/accelerometer.html#microbit.accelerometer.get_gestures';
Blockly.Msg.MICROBIT_ACCELEROMETER_CURRENT_GESTURE_MESSAGE0 =  "الإيماءة الحالية" ;
Blockly.Msg.MICROBIT_ACCELEROMETER_CURRENT_GESTURE_TOOLTIP =  'إرجاع اسم الإيماءة الحالية.';
Blockly.Msg.MICROBIT_ACCELEROMETER_CURRENT_GESTURE_HELPURL =  'https://microbit-micropython.readthedocs.io/en/latest/accelerometer.html#microbit.accelerometer.current_gesture';
Blockly.Msg.MICROBIT_BUTTON_IS_PRESSED_MESSAGE0 =  'تم الضغط على الزر %1';
Blockly.Msg.MICROBIT_BUTTON_IS_PRESSED_TOOLTIP =  'إرجاع صحيح إذا تم الضغط على الزر المحدد. وإلا ، قم بإرجاع خطأ. ';
Blockly.Msg.MICROBIT_BUTTON_IS_PRESSED_HELPURL =  'https://microbit-micropython.readthedocs.io/en/latest/button.html#Button.is_pressed';
Blockly.Msg.MICROBIT_BUTTON_WAS_PRESSED_MESSAGE0 =  'تم الضغط على الزر %1';
Blockly.Msg.MICROBIT_BUTTON_WAS_PRESSED_TOOLTIP =  'إرجاع صحيح إذا تم الضغط على الزر المحدد منذ بدء تشغيل الجهاز أو آخر مرة تم فيها الفحص.';
Blockly.Msg.MICROBIT_BUTTON_WAS_PRESSED_HELPURL =  'https://microbit-micropython.readthedocs.io/en/latest/button.html#Button.was_pressed';
Blockly.Msg.MICROBIT_BUTTON_GET_PRESSES_MESSAGE0 =  'الحصول على عدد الضغطات للزر %1';
Blockly.Msg.MICROBIT_BUTTON_GET_PRESSES_TOOLTIP =  'إعادة إجمالي عدد الضغطات للزر المحدد ، وإعادة تعيين هذا الإجمالي إلى صفر.';
Blockly.Msg.MICROBIT_BUTTON_GET_PRESSES_HELPURL =  'https://microbit-micropython.readthedocs.io/en/latest/button.html#Button.get_presses';
Blockly.Msg.MICROBIT_COMPASS_CALIBRATE_HELPURL =  'https://microbit-micropython.readthedocs.io/en/latest/compass.html#microbit.compass.calibrate';
Blockly.Msg.MICROBIT_COMPASS_CALIBRATE_MESSAGE0 =  'معايرة البوصلة';
Blockly.Msg.MICROBIT_COMPASS_CALIBRATE_TOOLTIP =  'ابدأ عملية المعايرة لتحسين دقة البوصلة.';
Blockly.Msg.MICROBIT_COMPASS_IS_CALIBRATED_MESSAGE0 =  'هل البوصلة معايرة؟';
Blockly.Msg.MICROBIT_COMPASS_IS_CALIBRATED_TOOLTIP =  'إرجاع صحيح إذا تمت معايرة البوصلة ، وإلا فسيتم إرجاع خطأ.';
Blockly.Msg.MICROBIT_COMPASS_IS_CALIBRATED_HELPURL =  'https://microbit-micropython.readthedocs.io/en/latest/compass.html#microbit.compass.is_calibrated';
Blockly.Msg.MICROBIT_COMPASS_HEADING_MESSAGE0 =  "إتجاه البوصلة" ;
Blockly.Msg.MICROBIT_COMPASS_HEADING_TOOLTIP =  'إرجاع اتجاه البوصلة كرقم بين 0 إلى 360 ، يمثل الزاوية بالدرجات ، في اتجاه عقارب الساعة ، مع الشمال كـ 0.';
Blockly.Msg.MICROBIT_COMPASS_HEADING_HELPURL =  'https://microbit-micropython.readthedocs.io/en/latest/compass.html#microbit.compass.heading';
Blockly.Msg.MICROBIT_COMPASS_GET_FIELD_STRENGTH_MESSAGE0 =  "قوة مجال البوصلة" ;
Blockly.Msg.MICROBIT_COMPASS_GET_FIELD_STRENGTH_TOOLTIP =  'قم بإرجاع رقم يشير إلى قوة المجال المغناطيسي حول الجهاز.';
Blockly.Msg.MICROBIT_COMPASS_GET_FIELD_STRENGTH_HELPURL =  'https://microbit-micropython.readthedocs.io/en/latest/compass.html#microbit.compass.get_field_strength';
Blockly.Msg.MICROBIT_DISPLAY_GET_PIXEL_MESSAGE0 =  'احصل على السطوع عند X %1 Y %2' ;
Blockly.Msg.MICROBIT_DISPLAY_GET_PIXEL_TOOLTIP =  'احصل على سطوع LED في العمود X والصف Y كرقم بين 0 (إيقاف) و 9 (ألمع).';
Blockly.Msg.MICROBIT_DISPLAY_GET_PIXEL_HELPURL =  'https://microbit-micropython.readthedocs.io/en/latest/display.html#microbit.display.get_pixel';
Blockly.Msg.MICROBIT_DISPLAY_SET_PIXEL_MESSAGE0 =  'ضبط البكسل على X %1 Y %2 على السطوع %3' ;
Blockly.Msg.MICROBIT_DISPLAY_SET_PIXEL_TOOLTIP =  'قم بتعيين سطوع LED في العمود X والصف Y إلى قيمة يجب أن تكون رقمًا بين 0 (إيقاف) و 9 (ألمع).';
Blockly.Msg.MICROBIT_DISPLAY_SET_PIXEL_HELPURL =  'https://microbit-micropython.readthedocs.io/en/latest/display.html#microbit.display.set_pixel';
Blockly.Msg.MICROBIT_DISPLAY_CLEAR_HELPURL =  'https://microbit-micropython.readthedocs.io/en/latest/display.html#microbit.display.clear';
Blockly.Msg.MICROBIT_DISPLAY_CLEAR_MESSAGE0 =  "مسح العرض" ;
Blockly.Msg.MICROBIT_DISPLAY_CLEAR_TOOLTIP =  'امسح الشاشة - اضبط سطوع جميع مؤشرات LED على 0 (إيقاف).';
Blockly.Msg.MICROBIT_DISPLAY_SHOW_IMAGE_MESSAGE0 =  'إظهار الصورة %1' ;
Blockly.Msg.MICROBIT_DISPLAY_SHOW_IMAGE_TOOLTIP =  'إظهار الصورة المشار إليها على الشاشة.';
Blockly.Msg.MICROBIT_DISPLAY_SHOW_IMAGE_HELPURL =  'https://microbit-micropython.readthedocs.io/en/latest/display.html#microbit.display.show';
Blockly.Msg.MICROBIT_DISPLAY_SHOW_ANIMATION_MESSAGE0 =  'تحريك الصور %1 بتأخير %2 ميلي ثانية بين الإطارات. %3 انتظر %4 %5 إعادة %6 %7 مسح %8 ';
Blockly.Msg.MICROBIT_DISPLAY_SHOW_ANIMATION_TOOLTIP =  'اعرض قائمة الصور كرسوم متحركة بتأخير معين بين كل إطار. وضح ما إذا كنت بحاجة إلى الانتظار قبل المتابعة ، الإستمرار في تكرار الرسم المتحرك ،ومسح الشاشة عند الانتهاء. ';
Blockly.Msg.MICROBIT_DISPLAY_SHOW_ANIMATION_HELPURL =  'https://microbit-micropython.readthedocs.io/en/latest/display.html#microbit.display.show';
Blockly.Msg.MICROBIT_DISPLAY_SCROLL_MESSAGE0 =  'تمرير الرسالة %1' ;
Blockly.Msg.MICROBIT_DISPLAY_SCROLL_TOOLTIP =  'قم بتمرير النص المحدد عبر الشاشة.';
Blockly.Msg.MICROBIT_DISPLAY_SCROLL_HELPURL =  'https://microbit-micropython.readthedocs.io/en/latest/display.html#microbit.display.scroll';
Blockly.Msg.MICROBIT_DISPLAY_ON_HELPURL =  'https://microbit-micropython.readthedocs.io/en/latest/display.html#microbit.display.on';
Blockly.Msg.MICROBIT_DISPLAY_ON_MESSAGE0 =  "تشغيل العرض" ;
Blockly.Msg.MICROBIT_DISPLAY_ON_TOOLTIP =  'تشغيل الشاشة.';
Blockly.Msg.MICROBIT_DISPLAY_OFF_HELPURL =  'https://microbit-micropython.readthedocs.io/en/latest/display.html#microbit.display.off';
Blockly.Msg.MICROBIT_DISPLAY_OFF_MESSAGE0 =  "إيقاف تشغيل العرض" ;
Blockly.Msg.MICROBIT_DISPLAY_OFF_TOOLTIP =  'أوقف تشغيل الشاشة.';
Blockly.Msg.MICROBIT_DISPLAY_IS_ON_MESSAGE0 =  "العرض قيد التشغيل؟" ;
Blockly.Msg.MICROBIT_DISPLAY_IS_ON_TOOLTIP =  'إرجاع صحيح إذا كانت الشاشة في وضع التشغيل ، وإلا قم بإرجاع خطأ.';
Blockly.Msg.MICROBIT_DISPLAY_IS_ON_HELPURL =  'https://microbit-micropython.readthedocs.io/en/latest/display.html#microbit.display.is_on';
Blockly.Msg.MICROBIT_IMAGE_BUILTINS_MESSAGE0 =  'صورة مضمنة %1' ;
Blockly.Msg.MICROBIT_IMAGE_BUILTINS_TOOLTIP =  "تحديد واحدة من الصور المضمنة."
Blockly.Msg.MICROBIT_IMAGE_BUILTINS_TOOLTIP =  'حدد إحدى الصور المدمجة.';
Blockly.Msg.MICROBIT_IMAGE_BUILTINS_HELPURL =  'https://microbit-micropython.readthedocs.io/en/latest/image.html#attributes';
Blockly.Msg.MICROBIT_IMAGE_COPY_MESSAGE0 =  'نسخ الصورة %1' ;
Blockly.Msg.MICROBIT_IMAGE_COPY_TOOLTIP =  'إنشاء نسخة طبق الأصل من الصورة المشار إليها.';
Blockly.Msg.MICROBIT_IMAGE_COPY_HELPURL =  'https://microbit-micropython.readthedocs.io/en/latest/image.html#microbit.Image.copy';
Blockly.Msg.MICROBIT_IMAGE_INVERT_MESSAGE0 =  'عكس الصورة %1';
Blockly.Msg.MICROBIT_IMAGE_INVERT_TOOLTIP =  'إنشاء صورة جديدة عن طريق عكس سطوع وحدات البكسل في الصورة المشار إليها.';
Blockly.Msg.MICROBIT_IMAGE_INVERT_HELPURL =  'https://microbit-micropython.readthedocs.io/en/latest/image.html#microbit.Image.invert';
Blockly.Msg.MICROBIT_IMAGE_CREATE_MESSAGE0 =  'إنشاء صورة %1 %2 %3 %4 %5 %6 %7 %8 %9 %10 %11 %12 %13 %14 %15 %16 %17 %18 %19 %20 %21 %22 %23 %24 %25 %26 %27 %28 %29 %30';
Blockly.Msg.MICROBIT_IMAGE_CREATE_TOOLTIP =  'إنشاء صورة جديدة.';
Blockly.Msg.MICROBIT_IMAGE_CREATE_HELPURL =  'https://microbit-micropython.readthedocs.io/en/latest/image.html#microbit.Image';
Blockly.Msg.MICROBIT_MICROBIT_PANIC_MESSAGE0 =  'خطأ كبير برمز الحالة %1' ;
Blockly.Msg.MICROBIT_MICROBIT_PANIC_TOOLTIP =  'ادخل إلى وضع الذعر للإشارة إلى حدوث خطأ ما. يتطلب إعادة التشغيل. قم بإدخال رقم للإشارة إلى رمز الحالة. ';
Blockly.Msg.MICROBIT_MICROBIT_PANIC_HELPURL =  'https://microbit-micropython.readthedocs.io/en/latest/microbit.html#microbit.panic';
Blockly.Msg.MICROBIT_MICROBIT_RESET_HELPURL =  'https://microbit-micropython.readthedocs.io/en/latest/microbit.html#microbit.reset';
Blockly.Msg.MICROBIT_MICROBIT_RESET_MESSAGE0 =  'أعد تشغيل micro:bit';
Blockly.Msg.MICROBIT_MICROBIT_RESET_TOOLTIP =  'إعادة تشغيل the micro: bit';
Blockly.Msg.MICROBIT_MICROBIT_SLEEP_MESSAGE0 =  "النوم %1 ميلي ثانية" ;
Blockly.Msg.MICROBIT_MICROBIT_SLEEP_TOOLTIP =  'انتظر عددًا محددًا من الميلي ثانية قبل تنفيذ التعليمات الموالية.';
Blockly.Msg.MICROBIT_MICROBIT_SLEEP_HELPURL =  'https://microbit-micropython.readthedocs.io/en/latest/microbit.html#microbit.sleep';
Blockly.Msg.MICROBIT_MICROBIT_RUNNING_TIME_MESSAGE0 =  "وقت التشغيل" ;
Blockly.Msg.MICROBIT_MICROBIT_RUNNING_TIME_TOOLTIP =  'احصل على عدد الميلي ثانية منذ تشغيل اللوحة أو إعادة تشغيلها.';
Blockly.Msg.MICROBIT_MICROBIT_RUNNING_TIME_HELPURL =  'https://microbit-micropython.readthedocs.io/en/latest/microbit.html#microbit.running_time';
Blockly.Msg.MICROBIT_MICROBIT_TEMPERATURE_MESSAGE0 =  "درجة حرارة اللوحة" ;
Blockly.Msg.MICROBIT_MICROBIT_TEMPERATURE_TOOLTIP =  'الحصول على درجة حرارة المايكرو:بت بالدرجات المئوية.';
Blockly.Msg.MICROBIT_MICROBIT_TEMPERATURE_HELPURL =  'https://microbit-micropython.readthedocs.io/en/latest/microbit.html#microbit.temperature';
Blockly.Msg.MICROBIT_MUSIC_PLAY_BUILT_IN_MESSAGE0 =  'تشغيل اللحن المدمج %1 %2 انتظر %3 %4 إعادة %5';
Blockly.Msg.MICROBIT_MUSIC_PLAY_BUILT_IN_TOOLTIP =  'شغل أحد الألحان المدمجة. وضح ما إذا كنت بحاجة إلى الانتظار قبل المتابعة أو تكرار اللحن باستمرار. ';
Blockly.Msg.MICROBIT_MUSIC_PLAY_BUILT_IN_HELPURL =  'https://microbit-micropython.readthedocs.io/en/latest/music.html#built-in-melodies';
Blockly.Msg.MICROBIT_MUSIC_PITCH_MESSAGE0 =  'تشغيل نوتة %1 %2 لمدة %3 ميلي ثانية';
Blockly.Msg.MICROBIT_MUSIC_PITCH_TOOLTIP =  'تشغيل نوتة بعدد معين من المرات في الثانية لعدد محدد من الميلي ثانية.';
Blockly.Msg.MICROBIT_MUSIC_PITCH_HELPURL =  'https://microbit-micropython.readthedocs.io/en/latest/music.html#music.pitch';
Blockly.Msg.MICROBIT_MUSIC_PLAY_LIST_OF_NOTES_MESSAGE0 =  'تشغيل الملاحظات %1 انتظر %2 %3 إعادة %4';
Blockly.Msg.MICROBIT_MUSIC_PLAY_LIST_OF_NOTES_TOOLTIP =  'تشغيل قائمة من النوتات المعبر عنها بلغة الموسيقى الخاصة. وضح ما إذا كنت بحاجة إلى الانتظار قبل المتابعة أو تكرار اللحن باستمرار. ';
Blockly.Msg.MICROBIT_MUSIC_PLAY_LIST_OF_NOTES_HELPURL =  'https://microbit-micropython.readthedocs.io/en/latest/music.html#musical-notation';
Blockly.Msg.MICROBIT_MUSIC_RESET_HELPURL =  'https://microbit-micropython.readthedocs.io/en/latest/music.html#music.reset';
Blockly.Msg.MICROBIT_MUSIC_RESET_MESSAGE0 =  'إعادة تعيين الموسيقى' ;
Blockly.Msg.MICROBIT_MUSIC_RESET_TOOLTIP =  'إعادة تعيين جميع الإعدادات ذات الصلة بالموسيقى (الإيقاع الحالي والأوكتاف والمدة) إلى القيم الافتراضية.';
Blockly.Msg.MICROBIT_MUSIC_STOP_HELPURL =  'https://microbit-micropython.readthedocs.io/en/latest/music.html#music.stop';
Blockly.Msg.MICROBIT_MUSIC_STOP_MESSAGE0 =  "إيقاف الموسيقى" ;
Blockly.Msg.MICROBIT_MUSIC_STOP_TOOLTIP =  'إيقاف تشغيل الموسيقى بالكامل.';
Blockly.Msg.MICROBIT_MUSIC_SET_TEMPO_MESSAGE0 =  'ضبط الإيقاع بضربة واحدة مثل الضربات %1 ، عند %2 نبضة في الدقيقة' ;
Blockly.Msg.MICROBIT_MUSIC_SET_TEMPO_TOOLTIP =  'ضبط سرعة التشغيل (الإيقاع). عدد معين من النقرات يمثل نبضة. يتم لعب كل نبضة لعدد معين من المرات في الدقيقة (نبضات في الدقيقة أو BPM). ';
Blockly.Msg.MICROBIT_MUSIC_SET_TEMPO_HELPURL =  'https://microbit-micropython.readthedocs.io/en/latest/music.html#music.set_tempo';
Blockly.Msg.MICROBIT_MUSIC_GET_TEMPO_MESSAGE0 =  'الحصول على الإيقاع الحالي' ;
Blockly.Msg.MICROBIT_MUSIC_GET_TEMPO_TOOLTIP =  'الحصول على معلومات الإيقاع الحالية كرقمين: عدد النقرات لكل نبضة وعدد النبضات في الدقيقة (BPM).';
Blockly.Msg.MICROBIT_MUSIC_GET_TEMPO_HELPURL =  'https://microbit-micropython.readthedocs.io/en/latest/music.html#music.get_tempo';
Blockly.Msg.MICROBIT_NEOPIXEL_INITIALISE_MESSAGE0 =  'تهيئة عدد %1 من neopixel[s] %2 على الدبوس %3';
Blockly.Msg.MICROBIT_NEOPIXEL_INITIALISE_TOOLTIP =  'أنشئ كائنًا للتحكم في أي عدد من وحدات neopixels المتصلة. حدد عدد neopixels والدبوس المرتبط بها. ';
Blockly.Msg.MICROBIT_NEOPIXEL_INITIALISE_HELPURL =  'https://microbit-micropython.readthedocs.io/en/latest/neopixel.html#neopixel.NeoPixel';
Blockly.Msg.MICROBIT_NEOPIXEL_CLEAR_MESSAGE0 =  'مسح وحدات neopixels في %1' ;
Blockly.Msg.MICROBIT_NEOPIXEL_CLEAR_TOOLTIP =  'امسح كل neopixels التي يتحكم فيها كائن neopixel المشار إليه.';
Blockly.Msg.MICROBIT_NEOPIXEL_CLEAR_HELPURL =  'https://microbit-micropython.readthedocs.io/en/latest/neopixel.html#neopixel.NeoPixel.clear';
Blockly.Msg.MICROBIT_NEOPIXEL_SHOW_MESSAGE0 =  'عرض neopixels على %1' ;
Blockly.Msg.MICROBIT_NEOPIXEL_SHOW_TOOLTIP =  'إظهار / تحديث جميع neopixels التي يتحكم فيها كائن neopixel المشار إليه.';
Blockly.Msg.MICROBIT_NEOPIXEL_SHOW_HELPURL =  'https://microbit-micropython.readthedocs.io/en/latest/neopixel.html#neopixel.NeoPixel.show';
Blockly.Msg.MICROBIT_NEOPIXEL_SET_MESSAGE0 =  'باستخدام neopixels على %1 اضبط البكسل في الموضع %2 كالتالي : الأحمر %3 الأخضر %4 الأزرق %5';
Blockly.Msg.MICROBIT_NEOPIXEL_SET_TOOLTIP =  'استخدم كائن neopixel المشار إليه لتحديث neopixel الذي في موضع مرقّم محدد بقيمة للأحمر و الأخضر و الأزرق (RGB).';
Blockly.Msg.MICROBIT_NEOPIXEL_SET_HELPURL =  'https://microbit-micropython.readthedocs.io/en/latest/neopixel.html#using-neopixels';
Blockly.Msg.MICROBIT_PIN_TOUCHED_MESSAGE0 =  'هل تم لمس الدبوس %1؟';
Blockly.Msg.MICROBIT_PIN_TOUCHED_TOOLTIP =  'إرجاع صحيح إذا تم لمس الدبوس المشار إليه.';
Blockly.Msg.MICROBIT_PIN_TOUCHED_HELPURL =  'https://microbit-micropython.readthedocs.io/en/latest/pin.html#microbit.MicroBitTouchPin.is_touched';
Blockly.Msg.MICROBIT_PIN_READ_ANALOG_MESSAGE0 =  'قراءة تناظرية على الدبوس %1' ;
Blockly.Msg.MICROBIT_PIN_READ_ANALOG_TOOLTIP =  'قراءة القيمة التناظرية على الدبوس المشار إليه.';
Blockly.Msg.MICROBIT_PIN_READ_ANALOG_HELPURL =  'https://microbit-micropython.readthedocs.io/en/latest/pin.html#microbit.MicroBitAnalogDigitalPin.read_analog';
Blockly.Msg.MICROBIT_PIN_WRITE_ANALOG_MESSAGE0 =  'كتابة القيمة التناظرية %1 على الدبوس %2';
Blockly.Msg.MICROBIT_PIN_WRITE_ANALOG_TOOLTIP =  'كتابة القيمة التناظرية إلى الدبوس المشار إليه.';
Blockly.Msg.MICROBIT_PIN_WRITE_ANALOG_HELPURL =  'https://microbit-micropython.readthedocs.io/en/latest/pin.html#microbit.MicroBitAnalogDigitalPin.write_analog';
Blockly.Msg.MICROBIT_PIN_READ_DIGITAL_MESSAGE0 =  'قراءة القيمة الرقمية على الدبوس %1' ;
Blockly.Msg.MICROBIT_PIN_READ_DIGITAL_TOOLTIP =  'قراءة القيمة الرقمية (صواب أو خطأ) من الدبوس المشار إليه.';
Blockly.Msg.MICROBIT_PIN_READ_DIGITAL_HELPURL =  'https://microbit-micropython.readthedocs.io/en/latest/pin.html#microbit.MicroBitDigitalPin.read_digital';
Blockly.Msg.MICROBIT_PIN_WRITE_DIGITAL_MESSAGE0 =  'كتابة القيمة الرقمية %1 على الدبوس %2' ;
Blockly.Msg.MICROBIT_PIN_WRITE_DIGITAL_TOOLTIP =  'كتابة القيمة الرقمية (صحيح أو خطأ) إلى الدبوس المشار إليه.';
Blockly.Msg.MICROBIT_PIN_WRITE_DIGITAL_HELPURL =  'https://microbit-micropython.readthedocs.io/en/latest/pin.html#microbit.MicroBitDigitalPin.write_digital';
Blockly.Msg.MICROBIT_RADIO_ON_HELPURL =  'https://microbit-micropython.readthedocs.io/en/latest/radio.html#radio.on';
Blockly.Msg.MICROBIT_RADIO_ON_MESSAGE0 =  "تشغيل الراديو" ;
Blockly.Msg.MICROBIT_RADIO_ON_TOOLTIP =  'قم بتشغيل الراديو. يجب استدعاء هذا بشكل صريح لأن الراديو يستهلك الطاقة ويشغل الذاكرة التي قد تحتاجها. ';
Blockly.Msg.MICROBIT_RADIO_OFF_HELPURL =  'https://microbit-micropython.readthedocs.io/en/latest/radio.html#radio.off';
Blockly.Msg.MICROBIT_RADIO_OFF_MESSAGE0 =  "إيقاف الراديو" ;
Blockly.Msg.MICROBIT_RADIO_OFF_TOOLTIP =  'قم بإيقاف تشغيل الراديو ، وبالتالي توفير الطاقة والذاكرة.';
Blockly.Msg.MICROBIT_RADIO_CONFIG_MESSAGE0 =  'تكوين طول رسالة الراديو %1 %2 الحد الأقصى لطول قائمة الانتظار %3 %4 موالف للقناة %5 %6 طاقة البث %7 %8 معدل البيانات %9';
Blockly.Msg.MICROBIT_RADIO_CONFIG_TOOLTIP =  'تكوين الراديو. يحدد الطول طول الرسالة الواحدة. تحدد قائمة الانتظار عدد الرسائل التي يمكن تخزينها في قائمة انتظار الرسائل الواردة. تحدد القناة التردد الذي يتم ضبط الراديو عليه. تحدد الطاقة قوة إشارة البث. يشير معدل البيانات إلى السرعة التي يتم بها نقل البيانات. ';
Blockly.Msg.MICROBIT_RADIO_CONFIG_HELPURL =  'https://microbit-micropython.readthedocs.io/en/latest/radio.html#radio.config';
Blockly.Msg.MICROBIT_RADIO_RESET_HELPURL =  'https://microbit-micropython.readthedocs.io/en/latest/radio.html#radio.reset';
Blockly.Msg.MICROBIT_RADIO_RESET_MESSAGE0 =  'إعادة ضبط الراديو';
Blockly.Msg.MICROBIT_RADIO_RESET_TOOLTIP =  'إعادة ضبط الراديو على الإعدادات الافتراضية.';
Blockly.Msg.MICROBIT_RADIO_SEND_STRING_MESSAGE0 =  'أرسل الرسالة %1' ;
Blockly.Msg.MICROBIT_RADIO_SEND_STRING_TOOLTIP =  'بث رسالة نصية.';
Blockly.Msg.MICROBIT_RADIO_SEND_STRING_HELPURL =  'https://microbit-micropython.readthedocs.io/en/latest/radio.html#radio.send';
Blockly.Msg.MICROBIT_RADIO_RECEIVE_MESSAGE0 =  "تلقي رسالة" ;
Blockly.Msg.MICROBIT_RADIO_RECEIVE_TOOLTIP =  'تلقي رسالة.';
Blockly.Msg.MICROBIT_RADIO_RECEIVE_HELPURL =  'https://microbit-micropython.readthedocs.io/en/latest/radio.html#radio.receive';
Blockly.Msg.MICROBIT_SPEECH_SAY_MESSAGE0 =  'قل %1';
Blockly.Msg.MICROBIT_SPEECH_SAY_TOOLTIP =  'محاولة نطق الإدخال باللغة الإنجليزية.';
Blockly.Msg.MICROBIT_SPEECH_SAY_HELPURL =  'https://microbit-micropython.readthedocs.io/en/latest/speech.html#speech.say';
Blockly.Msg.MICROBIT_SPEECH_PRONOUNCE_MESSAGE0 =  'انطق %1';
Blockly.Msg.MICROBIT_SPEECH_PRONOUNCE_TOOLTIP =  'نطق الإدخال الصوتي بدقة.';
Blockly.Msg.MICROBIT_SPEECH_PRONOUNCE_HELPURL =  'https://microbit-micropython.readthedocs.io/en/latest/speech.html#phonemes';
Blockly.Msg.MICROBIT_SPEECH_SING_MESSAGE0 =  'غني %1';
Blockly.Msg.MICROBIT_SPEECH_SING_TOOLTIP =  'غناء الصوتيات مثل ROBOT.';
Blockly.Msg.MICROBIT_SPEECH_SING_HELPURL =  'https://microbit-micropython.readthedocs.io/en/latest/speech.html#singing';