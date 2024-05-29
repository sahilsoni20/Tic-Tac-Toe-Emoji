  import React from 'react';

  const emojis = [
    "em-m", "em-x", "em-o", "em-anguished", "em-angry", "em-astonished", 
    "em-blush", "em-cold_sweat", "em-confused", "em-confounded", "em-cry", 
    "em-disappointed", "em-disappointed_relieved", "em-dizzy_face", "em-drooling_face", 
    "em-exploding_head", "em-expressionless", "em-face_vomiting", "em-face_with_cowboy_hat", 
    "em-face_with_hand_over_mouth", "em-face_with_head_bandage", "em-face_with_monocle", 
    "em-face_with_raised_eyebrow", "em-face_with_rolling_eyes", "em-face_with_symbols_on_mouth", 
    "em-face_with_thermometer", "em-fearful", "em-frowning", "em-full_moon_with_face", 
    "em-grimacing", "em-grin", "em-grinning", "em-heart_eyes", "em-hugging_face", "em-hushed", 
    "em-innocent", "em-joy", "em-kissing", "em-kissing_closed_eyes", "em-kissing_heart", 
    "em-kissing_smiling_eyes", "em-laughing", "em-lying_face", "em-mask", "em-money_mouth_face", 
    "em-nerd_face", "em-neutral_face", "em-no_mouth", "em-open_mouth", "em-partying_face", 
    "em-pensive", "em-persevere", "em-pleading_face", "em-relaxed", "em-relieved", 
    "em-rolling_on_the_floor_laughing", "em-scream", "em-shushing_face", "em-sleeping", 
    "em-sleepy", "em-slightly_frowning_face", "em-slightly_smiling_face", "em-smile", "em-smiley", 
    "em-smiling_face_with_3_hearts", "em-smirk", "em-sneezing_face", "em-sob", "em-star-struck", 
    "em-stuck_out_tongue", "em-stuck_out_tongue_closed_eyes", "em-stuck_out_tongue_winking_eye", 
    "em-sunglasses", "em-sweat", "em-sweat_smile", "em-thinking_face", "em-tired_face", "em-triumph", 
    "em-unamused", "em-upside_down_face", "em-weary", "em-white_frowning_face", "em-wink", "em-woozy_face", 
    "em-worried", "em-yum", "em-zany_face", "em-zipper_mouth_face", "em-male-technologist", 
    "em-female-technologist", "em-alien", "em-hankey", "em-baby_chick", "em-dragon_face", "em-bear", 
    "em-hamster", "em-cat", "em-dog", "em-wolf", "em-fox_face", "em-tiger", "em-lion_face", "em-horse", 
    "em-monkey_face", "em-panda_face", "em-cow", "em-pig", "em-dolphin", "em-apple", "em-green_apple", 
    "em-banana", "em-coconut", "em-pineapple", "em-lemon", "em-tangerine", "em-avocado", "em-strawberry", 
    "em-grapes", "em-hamburger", "em-pizza", "em-doughnut", "em-soccer", "em-baseball", "em-basketball", 
    "em-tennis", "em-football", "em-video_game", "em-fire", "em-zap"
  ];

  const EmojiSelector = ({ onEmojiClick, activeEmoji, setActivePlayer, activePlayer }) => {
    return (
      <div className="emoji-picker">
        <div className='span-emoji'> 
          <span onClick={() => setActivePlayer(1)} className={activePlayer === 1 ? 'active' : ''}>
            Select Emoji For Player 1 <i className={`em ${activePlayer === 1 ? activeEmoji : 'em'}`} aria-label="PLAYER 1"></i>
          </span>
          <span onClick={() => setActivePlayer(2)} className={activePlayer === 2 ? 'active' : ''}>
            Select Emoji For Player 2 <i className={`em ${activePlayer === 2 ? activeEmoji : 'em'}`} aria-label="PLAYER 2"></i>
          </span>
        </div>
        <ul className="emojis">
          {emojis.map((emoji) => (
            <li 
              key={emoji} 
              onClick={() => onEmojiClick(emoji)} 
              className={activeEmoji === emoji ? 'active' : ''}
            >
              <i className={`em ${emoji}`} aria-label={emoji.replace('em-', '').toUpperCase().replace(/_/g, ' ')}></i>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  export default EmojiSelector;
