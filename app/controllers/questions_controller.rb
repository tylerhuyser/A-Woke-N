class QuestionsController < ApplicationController
  before_action :set_question, only: [:show, :update, :destroy]
  # before_action :authorize_request, only: [:create, :update, :destroy] 

  # GET /questions
  def index
    if params[:survey_format_id]
      @survey_format = SurveyFormat.find(params[:survey_format_id])

      render json: @survey_format, include: {questions: {include: :options}}
    else
      @questions = Question.all

      render json: @questions
    end
  end

  # GET /questions/1
  def show
    render json: @question, include: :options
  end

  # POST /questions
  def create
    @question = Question.new(question_params)

    if @question.save
      render json: @question, status: :created, location: @question
    else
      render json: @question.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /questions/1
  def update
    if @question.update(question_params)
      render json: @question
    else
      render json: @question.errors, status: :unprocessable_entity
    end
  end

  # DELETE /questions/1
  def destroy
    @question.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_question
      @question = Question.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def question_params
      params.require(:question).permit(:question_format, :question_category, :question_copy, :survey_format_id)
    end
end
