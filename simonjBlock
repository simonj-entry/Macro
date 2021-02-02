const  LibraryCreator  =  {
    시작 : ( blocksJSON ,  카테고리 ,  텍스트 )  =>  {
      let  blockArray  =  새  배열
      // LibraryCreator 가져 오기
      항목 . staticBlocks  =  [
        {
          카테고리 : '시작' ,
          블록 : [
            'when_run_button_click' ,
            'when_some_key_pressed' ,
            'mouse_clicked' ,
            'mouse_click_cancled' ,
            'when_object_click' ,
            'when_object_click_canceled' ,
            'when_message_cast' ,
            'message_cast' ,
            'message_cast_wait' ,
            'when_scene_start' ,
            'start_scene' ,
            'start_neighbor_scene' ,
            'check_object_property' ,
            'check_block_execution' ,
            'switch_scope' ,
            'is_answer_submited' ,
            'check_lecture_goal' ,
            'check_variable_by_name' ,
            'show_prompt' ,
            'check_goal_success' ,
            '양수' ,
            'negative_number' ,
            '와일드 카드 _ 문자열' ,
            'wildcard_boolean' ,
            'register_score' ,
          ] ,
        } ,
        {
          카테고리 : 'flow' ,
          블록 : [
            'wait_second' ,
            '반복 _ 기본' ,
            '반복 _inf' ,
            'repeat_while_true' ,
            'stop_repeat' ,
            '_if' ,
            'if_else' ,
            'wait_until_true' ,
            'stop_object' ,
            'restart_project' ,
            'when_clone_start' ,
            'create_clone' ,
            'delete_clone' ,
            'remove_all_clones' ,
          ] ,
        } ,
        {
          카테고리 : '움직이는' ,
          블록 : [
            'move_direction' ,
            'bounce_wall' ,
            'move_x' ,
            'move_y' ,
            'move_xy_time' ,
            'locate_x' ,
            'locate_y' ,
            'locate_xy' ,
            'locate_xy_time' ,
            'locate' ,
            'locate_object_time' ,
            'rotate_relative' ,
            'direction_relative' ,
            'rotate_by_time' ,
            'direction_relative_duration' ,
            'rotate_absolute' ,
            'direction_absolute' ,
            'see_angle_object' ,
            'move_to_angle' ,
          ] ,
        } ,
        {
          카테고리 : '외모' ,
          블록 : [
            'show' ,
            '숨기기' ,
            'dialog_time' ,
            'dialog' ,
            'remove_dialog' ,
            'change_to_some_shape' ,
            'change_to_next_shape' ,
            'add_effect_amount' ,
            'change_effect_amount' ,
            'erase_all_effects' ,
            'change_scale_size' ,
            'set_scale_size' ,
            'flip_x' ,
            'flip_y' ,
            'change_object_index' ,
          ] ,
        } ,
        {
          카테고리 : '브러시' ,
          블록 : [
            'brush_stamp' ,
            'start_drawing' ,
            'stop_drawing' ,
            'set_color' ,
            'set_random_color' ,
            'change_thickness' ,
            'set_thickness' ,
            'change_brush_transparency' ,
            'set_brush_tranparency' ,
            'brush_erase_all' ,
          ] ,
        } ,
        {
          카테고리 : '텍스트' ,
          블록 : [ 'text_read' ,  'text_write' ,  'text_append' ,  'text_prepend' ,  'text_flush' ] ,
        } ,
        {
          카테고리 : '소리' ,
          블록 : [
            'sound_something_with_block' ,
            'sound_something_second_with_block' ,
            'sound_from_to' ,
            'sound_something_wait_with_block' ,
            'sound_something_second_wait_with_block' ,
            'sound_from_to_and_wait' ,
            'sound_volume_change' ,
            'sound_volume_set' ,
            'sound_silent_all' ,
          ] ,
        } ,
        {
          카테고리 : '판단' ,
          블록 : [
            'is_clicked' ,
            'is_press_some_key' ,
            'reach_something' ,
            'boolean_basic_operator' ,
            'boolean_and_or' ,
            'boolean_not' ,
          ] ,
        } ,
        {
          카테고리 : 'calc' ,
          블록 : [
            'calc_basic' ,
            'calc_rand' ,
            'coordinate_mouse' ,
            'coordinate_object' ,
            'get_sound_volume' ,
            'quotient_and_mod' ,
            'calc_operation' ,
            'get_project_timer_value' ,
            'choose_project_timer_action' ,
            'set_visible_project_timer' ,
            'get_date' ,
            '거리 _ 무언가' ,
            'get_sound_duration' ,
            'get_user_name' ,
            'length_of_string' ,
            'combine_something' ,
            'char_at' ,
            '하위 문자열' ,
            'index_of_string' ,
            'replace_string' ,
            'change_string_case' ,
          ] ,
        } ,
        {
          카테고리 : '변수' ,
          블록 : [
            'variableAddButton' ,
            'listAddButton' ,
            'ask_and_wait' ,
            'get_canvas_input_value' ,
            'set_visible_answer' ,
            'get_variable' ,
            '변경 _ 변수' ,
            'set_variable' ,
            'show_variable' ,
            'hide_variable' ,
            'value_of_index_from_list' ,
            'add_value_to_list' ,
            'remove_value_from_list' ,
            'insert_value_to_list' ,
            'change_value_list_index' ,
            '길이 _ 목록' ,
            'is_included_in_list' ,
            'show_list' ,
            'hide_list' ,
          ] ,
        } ,
        {
          카테고리 : 'func' ,
          블록 : [ 'functionAddButton' ] ,
        } ,
        {
          카테고리 : '분석' ,
          블록 : [
            'analizyDataAddButton' ,
            'append_row_to_table' ,
            'insert_row_to_table' ,
            'delete_row_from_table' ,
            'set_value_from_table' ,
            'get_table_count' ,
            'get_value_from_table' ,
            'calc_values_from_table' ,
            'open_table_chart' ,
            'close_table_chart' ,
          ] ,
        } ,
        {
          카테고리 : 'ai_utilize' ,
          블록 : [
            'aiUtilizeBlockAddButton' ,
            'aiUtilizeModelTrainButton' ,
            'audio_title' ,
            'check_microphone' ,
            'speech_to_text_convert' ,
            'speech_to_text_get_value' ,
            'get_microphone_volume' ,
            'tts_title' ,
            'read_text' ,
            'read_text_wait_with_block' ,
            'set_tts_property' ,
            'translate_title' ,
            'get_translated_string' ,
            'check_language' ,
            'video_title' ,
            'video_draw_webcam' ,
            'video_check_webcam' ,
            'video_flip_camera' ,
            'video_set_camera_opacity_option' ,
            'video_motion_value' ,
            'video_toggle_model' ,
            'video_is_model_loaded' ,
            'video_number_detect' ,
            'video_toggle_ind' ,
            'video_body_part_coord' ,
            'video_face_part_coord' ,
            'video_detected_face_info' ,
          ] ,
        } ,
        {
          카테고리 : '확장' ,
          블록 : [
            'expansionBlockAddButton' ,
            'weather_title' ,
            'check_weather' ,
            'check_finedust' ,
            'get_weather_data' ,
            'get_current_weather_data' ,
            'get_today_ temperature' ,
            'check_city_weather' ,
            'check_city_finedust' ,
            'get_city_weather_data' ,
            'get_current_city_weather_data' ,
            'get_today_city_ temperature' ,
            'festival_title' ,
            'count_festival' ,
            'get_festival_info' ,
            'behaviorConductDisaster_title' ,
            'count_disaster_behavior' ,
            'get_disaster_behavior' ,
            'behaviorConductLifeSafety_title' ,
            'count_lifeSafety_behavior' ,
            'get_lifeSafety_behavior' ,
          ] ,
        } ,
        {
          카테고리 : 'arduino' ,
          블록 : [
            'arduino_reconnect' ,
            'arduino_open' ,
            'arduino_cloud_pc_open' ,
            'arduino_connect' ,
            'arduino_download_connector' ,
            '다운로드 가이드' ,
            'arduino_download_source' ,
            'arduino_noti' ,
          ] . concat ( EntryStatic . DynamicHardwareBlocks ) ,
        }
      ] ;
      EntryStatic . getAllBlocks  =  ( )  =>  {
        return  Entry . staticBlocks ;
      }
      function  updateCategory ( category ,  options )  {
        항목 . 놀이터 . mainWorkspace . blockMenu . _generateCategoryView ( [
          {  category : 'start' ,  visible : true  } ,
          {  카테고리 : '흐름' ,  표시 : 참  } ,
          {  카테고리 : '움직이는' ,  보이는 : 참  } ,
          {  category : 'looks' ,  visible : true  } ,
          {  카테고리 : '브러시' ,  표시 : true  } ,
          {  카테고리 : '텍스트' ,  표시 : 참  } ,
          {  category : 'sound' ,  visible : true  } ,
          {  category : 'judgement' ,  visible : true  } ,
          {  카테고리 : 'calc' ,  표시 : true  } ,
          {  카테고리 : '변수' ,  표시 : true  } ,
          {  category : 'func' ,  visible : true  } ,
          {  category : 'analysis' ,  visible : true  } ,
          {  category : 'ai_utilize' ,  visible : true  } ,
          {  category : 'expansion' ,  visible : true  } ,
          {  카테고리 : 카테고리 ,  가시적 : true  } ,
          {  카테고리 : 'arduino' ,  표시 : true  }
        ] ) ;
        for  ( let  i  =  0 ;  i  <  $ ( '.entryCategoryElementWorkspace' ) . length ;  i ++ )  {
          if  ( ! ( $ ( $ ( '.entryCategoryElementWorkspace' ) [ i ] ) . attr ( 'id' )  ==  "entryCategorytext" ) )  {
            $ ( $ ( '.entryCategoryElementWorkspace' ) [ i ] ) . attr ( '클래스' ,  'entryCategoryElementWorkspace' ) ;
          }
        }
        항목 . 놀이터 . blockMenu . _categoryData  =  EntryStatic . getAllBlocks ( ) ;
        항목 . 놀이터 . blockMenu . _generateCategoryCode ( 카테고리 ) ;
        if  ( 옵션 )  {
          if  ( 옵션 . 배경 )  {
            $ ( `#entryCategory $ { category } ` ) . css ( 'background-image' ,  'url ('  +  options . background  +  ')' ) ;
            $ ( `#entryCategory $ { category } ` ) . css ( 'background-repeat' ,  'no-repeat' ) ;
            if  ( 옵션 . backgroundSize )  {
              $ ( `#entryCategory $ { category } ` ) . css ( 'background-size' ,  options . backgroundSize  +  "px" ) ;
            }
          }
          if  ( 옵션 . 이름 )  {
            $ ( `#entryCategory $ { category } ` ) [ 0 ] . innerText  =  옵션 . 이름
          }
        }
      }
      function  addBlock ( blockname ,  template ,  color ,  params ,  _class ,  func , skeleton =  'basic' )  {
        항목 . 블록 [ 블록 이름 ]  =  {
          색상 : 색상 . 색상 ,
          fontColor : 색상 . 글꼴 ,
          outerLine : 색상 . 개요 ,
          골격 : 골격 ,
          문 : [ ] ,
          params : params . params ,
          이벤트 : { } ,
          정의 : {
            params : params . 정의 ,
            유형 : 블록 이름
          } ,
          paramsKeyMap : params . 지도 ,
          클래스 : _class ? _class : '기본' ,
          func : func ,
          템플릿 : 템플릿
        }
      }
      // 블록 추가하기
      for  ( let  i  in  blocksJSON )  {
        let  block  =  blocksJSON [ i ]
        blockArray . 푸시 ( 블록 . 이름 )
        addBlock ( 블록 . 이름 ,  블록 . 템플릿 ,  {  색상 : 블록 . 색상 . 기본 ,  outerLine : 블록 . 색상 . 어둡게  } ,  {  PARAMS : 블록 . PARAMS ,  정의 : 블록 . 데프 ,  지도 : 블록 . 지도  } ,  블록 . 클래스 ,  블록. func ,  block . 해골 )
      }
      // 블록 반영
      항목 . staticBlocks . 푸시 ( {  카테고리 : 카테고리 ,  블록 : blockArray  } )
      // 카테고리 업데이트 (ws에서만)
      if  ( typeof  useWebGL  ==  "undefined" )  {
        updateCategory ( 범주 )
        // 아이콘 적용
        $ ( 'head' ) . append ( `<style> #entryCategory $ { category } {background-image : url (https://raw.githack.com/thoratica/EntBlocks/master/other.svg); background-repeat : no-repeat; margin- bottom : 1px; background-position-y : 10px; background-size : 20px;}. entrySelectedCategory # entryCategory $ { category } {background-image : url (https://raw.githack.com/thoratica/EntBlocks/master/ other_selected.svg); background-color : # FFC000; border-color : # FFC000; color : #fff} </ style>` )
        // 카테고리 이름 적용
        $ ( `#entryCategory $ { category } ` ) . 추가 ( 텍스트 )
      }
      콘솔 . log ( '로딩을 시작합니다.' )
    }
  }
  const  블록  =  [
//////////////////////////////////////
    {
      name : 'firsttext' ,  // 이름 지정
      template : '% 1' ,  // 표시 할 내용
      skeleton : 'basic_text' ,  // 형식 (기본 텍스트)
      color : {  // 색깔
        기본값 : EntryStatic . colorSet . 일반적인 . 투명 ,  // 투명
        어둡게 : EntryStatic . colorSet . 일반적인 . 투명  // 투명
      } ,
      params : [  // % n의 형식 지정
        {  // % 1의 형식 정의
          type : 'Text' ,  // 텍스트 형식
          text : 'Web' ,  // 표시 내용
          색상 : EntryStatic . colorSet . 일반적인 . TEXT ,  // 검은 색
          정렬 : '중앙'
        }
      ] ,
      정의 : [ ] ,
      지도 : { } ,
      클래스 : '텍스트'
    } ,
//////////////////////////////////////

//////////////////////////////////////
    {
      name : 'SearchGoogle' ,  // 블럭 이름 지정
      template : '% 1 내용을 Google에 검색하기 % 2' ,  // 표시 할 내용
      skeleton : 'basic' ,  // 블럭 형식 (basic은 일반 블럭)
      color : {  // 색깔
        기본값 : '# 15b01a' ,  // RGB 색깔
        darken : '# 15b01a'  // RGB 색깔
      } ,
      params : [  // % n 정의
        {  // % 1 정의
          type : 'Block' ,  // 형식 지정 (입력 값)
          수락 : '문자열'
        } ,
        {  // % 2 정의
          type : 'Indicator' ,  // 형식 지정 (이미지)
          img : '' ,  // 이미지 링크
          size : 11 ,  // 크기
        }
      ] ,
      def : [  // % n 주소
        {  // % 1 정의
          유형 : '텍스트' ,
          params : [ '엔트리' ]  // 기본으로 입력 된 값
        } ,
        null  // % 2 정의 (이미지 형식 null로 설정)
      ] ,
      지도 : {
        SEARCHRESULT : 0  // % 1의 입력 값을 변수 이름 (대문자)
      } ,
      클래스 : '텍스트' ,
      func : async  ( sprite ,  script )  =>  {  // JS 코드
        // script.getValue ( '위에 맵에서 설정 한 변수 이름', script)이 코드로 입력 값로드 가능
        개방 ( 'https://google.com/search?q='  +  스크립트 . getValue ( '의 SearchResult' ,  스크립트 ) )
        반환  스크립트 . callReturn ( )  // 일반 블럭 코드는 반드시 삭제 해주세요
      } ,
    }
//////////////////////////////////////
  ]
  
  LibraryCreator. 시작 (블록, 'API', '시몬즈')
