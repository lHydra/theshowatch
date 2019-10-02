module MovieHelper
  def release_status(movie)
    case movie.status
    when 'released'
      t('active_record.models.movie.released_date.released')
    when 'expected'
      l(movie.release_date, format: '%Y')
    when 'coming_out'
      l(movie.release_date, format: '%-d %b %Y')
    else
      t('active_record.models.movie.released_date.no_information')
    end
  end
end
