class BirdsController < ApplicationController
  def index
    @birds = Bird.all
     render json: @birds
  end











private

def bird_params
  params.require(:bird).permit(:name, :description, :category,
                :image_url, :info_url);
  end

end
