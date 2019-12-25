class Users::SessionsController < Devise::SessionsController
  def check_for_user
    respond_to do |f|
      f.json { render json: { email: current_user&.email } }
    end
  end
end
