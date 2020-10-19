# A-Woke-N

## Overview

**A-Woke-N** is an app that helps _awaken_ users to their unconscious biases. Using an Implicit Aptitude Test (IAT), the app measures a user's implicit biases (commonly referred to as unconscious bias). Following the test, the app administers an intervention that helps guide users to a more _a-woke-n_ mindset. 

### Features

#### Company & User Auth Log-In

A-Woke-N enables companies to offer digitally-equipped and data-driven diversity & inclusion interventions. Upon registration, users will become associated with their employers using a unique access token -- thereby allowing companies to optimie the program throughout its flight. 

#### The Implicit Aptitude Test (IAT)

In short, the Implicit Aptitude Test (IAT)  measures the strength of correlation between identities (i.e. African-Americans, LGBT+ people, etc.) and concepts (such as 'good' or 'bad') or stereotypes (such as intelligence or athletic prowess). 

The idea is that the faster that people are able to associate an identity with an idea reflects their unconscious biases concerning that identity. For example, if a user is able to more quickly associate the word "good" with images of lighter skinned people, then that would indicate greater bias towards lighter-skinned groups of people.

While taking an IAT, users are asked to quickly sort words into categories that are on the left and right hand side of the computer screen. The test is broken into five parts:

  1. Sorting words relating to concepts (i.e. identifying good vs. bad words). This step primes the participant for the exercise.
  2. Distinguishing between our two identity categories (i.e. light-skinned vs. dark-skinned). Again, this step primes the participant for the exercise.
  3. This section combines exercises 1 & 2. On the left-hand side would be the "good" and "light-skinned" categories, whereas on the right would be the "bad" and "dark-skinned" categories.
  4. This section flips the placement of identity concepts. Now, "dark-skinned" would be on the left and "light-skinned" would be on the right. The "good" and "bad" categories remain in their respective positions.
  5. This block repeats Block 2's priming procedure. Users will sort only light-skinned and dark-skinned images, however, their left and right placements will be flipped. 'Good' and 'Bad' words are omitted from this block of the test.
  6. This section repeats block 3, however the placement of "good" vs. "bad" concepts is flipped.
  7. Finally, this section repeats block 4, and, once again, the placement of "good" vs. "bad" concepts is flipped.
  
  | Block | Function | Left-Key Items | Right-Key Items |
  |-------|----------|----------------|-----------------|
  |   1   |  Priming |  'Good' Words  |  'Bad' Words    |
  |   2   |  Priming |  Dark-Skinned  |  Light-Skinned  |
  |   3   |  Test    |  'Good' Words + Dark-Skinned   |  'Bad Words' + Light-Skinned  |
  |   4   |  Test    |  'Good' Words + Light-Skinned  |  'Bad Words' + Dark-Skinned   |
  |   5   |  Priming |  Light-Skinned  |  Dark-Skinned  |
  |   6   |  Test    |  Light-Skinned + 'Bad' Words   |  Dark-Skinned + 'Good' Words  |    
  |   7   |  Test    |  Light-Skinned + 'Good' Words  |  Dark-Skinned + 'Bad' Words   |
  

Running in the background, is a timer that the test uses in order to record the user's reaction times for third and fifth sections of the test. These times are averaged, subtracted, and then the result is computed into a score informing a user of their bias. The user is presented this score.

#### Intervention

After completing the initial assessment, the user is presented with an intervention that educates users on five (5) prejudice self-reguation strategies:

* Stereotype Replacement
* Counter-Stereotypic Imaging
* Individualizing
* Perspective-Taking
* Contact

After being introducted to the intervention strategies, participants are presented with a questionnaire, in which they rate their attitdues towards each strategy from 1 ('Not at All') to 7 ('Very Often'):

* Perceived Likelihood of Using Each Strategy
* Willingness to Use each Strategy
* Perceived Difficulty of Using Each Strategy
* Perceived Effectiveness of Each Strategy
* Perceived Frequency of Opportunity to use each strategy

The participants scores are averaged to obtain a mean, in which higher numbers indiciate higher likelihood, willingness, perceived difficulty, perceived effectiveness, and perceived opportunity in relation to each respective prejudice self-regulation strategy.

#### Post-Intervention

For the next twelve (12) weeks, participants are presented with a journal and questionnaire. The questionnaire asks the user to provide open-ended responses about their experiences with using the five prejudice self-regulation strategies.

For each strategy, the participants were asked whether they had used the strategy since their last in-lab session. If they had used a strategy, the participants were subsequently asked to describe one or two situations in which they had used the strategy. At the end of the questionnaire, the participants were asked to share any additional comments about implementing the strategies.

After completing the journal, the user is once again presented with the intervention questionnaire, in which they rate their attitudes towards each strategy from 1 to 7.

#### Cohort Data Visualization 

A feature available only to company admins. Corporate administrators will be able to assess the impact of the intervention on cohorts of employees over time. 

### Goals

The goal of A-Woke-N is to create an app that houses an approachable intervention that addresses unconscious bias. 

### Challenges

Some anticipated challenges with this project include:

* Developing a smooth experiences for employees (during the tests) and corporate administrators (while requesting cohort data).

* During the IAT test, image loading time must not skew the results of the test.

## MVP

* Auth Log-In
* React-with-Rails Framework
* Complete IAT Test
* Complete Journal Functionality
* Complete CRUD

#### Timeline

| Component | Priority | Estimated Time | Actual Time |
| --------- | -------- | -------------- | ----------- |
| Rails Backend | High | 4 hours | TBD |
| Header    | Low      | 1 hour | TBD |
| Nav       | Low      | 1 hour | TBD |
| Login | High | 6 hours | TBD |
| Register | High | 6 hours | TBD |
| Home | Medium | 3 hours | TBD |
| Onboarding Assessment (IAT) | Low | 12 hours | TBD |
| Journals | High | 4 hours | TBD |
| CSS | Medium | 4 hours | TBD |
| Media Queries | Medium | 4 hours | TBD |
| Admin LogIn | Low | 4 hours | TBD |
| Data Visualization | Low | 10 hours | TBD |
| **Total** | | 59 hours | TBD |


### Client

[Wireframes (Slides 6-22) & (27-40)](https://drive.google.com/file/d/1ad_nyQBvMUd_JPjUpoJlcoNqj9KZ9px3/view?usp=sharing)
[Component Heirarchy](https://whimsical.com/V2ZJ8U3A6JNc4hyLrazgKX)

### Server

[Data Architecture] - TBD

[Entity-Relationship-Diagram](https://drive.google.com/file/d/15UhOXcn6zN7cM_tvFxrDskiv1ET3TpuG/view?usp=sharing)

[API Endpoint Doucmentation] - TBD

### Dependencies

* Rails
* Create-React-App
* React-Router
* React-Router-Dom
* Axios
* Styled-Components
* React-Chartsjs-2

## Post-MVP

* Onboarding-Assessment
* Company Admin-View

## Notes:
 
### APIs:

#### Faces broken down by Ethnicity: 
  Generated Photos: https://generated.photos/datasets
  UTK Face: https://susanqq.github.io/UTKFace/
  U Texas Face: http://live.ece.utexas.edu/research/texas3dfr/
  
#### Words broken down by postive or negative connotation:
 https://www.datamuse.com/api/
 https://www.wordsapi.com/
 https://dictionaryapi.com/products/api-collegiate-thesaurus#:~:text=The%20Collegiate%C2%AE%20Thesaurus%20API,choices%2C%20examples%2C%20and%20explanations.  https://words.bighugelabs.com/site/api
